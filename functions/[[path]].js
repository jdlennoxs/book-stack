export async function onRequest(context) {
  const { request, env, ctx } = context;
    const url = new URL(request.url);

    // 1. Define the domains allowed to use this proxy
    const allowedOrigins = [
      'http://localhost:5173', // Your Vite local dev server
      'http://localhost:3000',
      'https://jdlennoxs.com', // Potential production domain
      // Add your production domain(s) here!
    ];

    const origin = request.headers.get('Origin');
    const referer = request.headers.get('Referer');
    
    let isAllowed = false;
    let returnedCorsOrigin = allowedOrigins[0];

    // 2. Check if the request comes from an allowed Origin or Referer
    if (origin && allowedOrigins.includes(origin)) {
      isAllowed = true;
      returnedCorsOrigin = origin;
    } else if (referer) {
      try {
        const refererOrigin = new URL(referer).origin;
        if (allowedOrigins.includes(refererOrigin)) {
          isAllowed = true;
          returnedCorsOrigin = refererOrigin;
        }
      } catch (e) {
        // Invalid referer
      }
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': returnedCorsOrigin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // 3. Reject the request if it's not from an allowed source
    if (!isAllowed) {
      return new Response('Forbidden: This proxy can only be accessed from allowed domains.', { status: 403 });
    }

    // --- ENDPOINT: /image-proxy ---
    if (url.pathname === '/image-proxy') {
      const imageUrl = url.searchParams.get('url');
      if (!imageUrl) {
        return new Response('Missing image URL', { status: 400, headers: corsHeaders });
      }

      try {
        const response = await fetch(imageUrl, {
          headers: { 'User-Agent': 'Cloudflare Worker Image Proxy' }
        });

        if (!response.ok) {
          return new Response(`Failed to fetch: ${response.statusText}`, { 
            status: response.status,
            headers: corsHeaders
          });
        }

        const responseHeaders = new Headers(corsHeaders);
        const contentType = response.headers.get('content-type');
        if (contentType) responseHeaders.set('Content-Type', contentType);
        responseHeaders.set('Cache-Control', 'public, max-age=86400');

        return new Response(response.body, {
          status: response.status,
          headers: responseHeaders,
        });
      } catch (error) {
        return new Response(`Error proxying image: ${error.message}`, { 
          status: 500, 
          headers: corsHeaders 
        });
      }
    }

    // --- ENDPOINT: /graphql ---
    if (url.pathname === '/graphql') {
      const username = url.searchParams.get('username');
      if (!username) {
        return new Response('Missing username parameter', { status: 400, headers: corsHeaders });
      }

      // --- Caching Strategy ---
      const cacheKey = `graphql:${username}`;
      let cachedData = null;
      if (env.BOOK_STACK_CACHE) {
        cachedData = await env.BOOK_STACK_CACHE.get(cacheKey);
      }

      if (cachedData) {
        return new Response(cachedData, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'X-Cache': 'HIT',
          }
        });
      }

      // --- Rate Limiting Strategy (KV-based) ---
      if (env.BOOK_STACK_CACHE) {
        const now = Math.floor(Date.now() / 1000);
        const currentMinute = Math.floor(now / 60);
        const rateLimitKey = `ratelimit:${currentMinute}`;
        
        const countStr = await env.BOOK_STACK_CACHE.get(rateLimitKey);
        const count = countStr ? parseInt(countStr) : 0;
        
        if (count >= 60) {
          return new Response('Rate limit exceeded (60 RPM). Please try again in a minute.', { 
            status: 429, 
            headers: {
              ...corsHeaders,
              'Retry-After': '60'
            } 
          });
        }
        
        // Use ctx.waitUntil to avoid blocking the request while incrementing
        // Note: For extreme accuracy, this would need a more complex atomic approach,
        // but for a simple proxy, this is highly effective.
        ctx.waitUntil(env.BOOK_STACK_CACHE.put(rateLimitKey, (count + 1).toString(), { expirationTtl: 120 }));
      }

      const graphqlQuery = `query MyQuery($username: citext!) {
  user_books(where: {user: {username: {_eq: $username}}, user_book_reads: {finished_at: {_is_null: false}}}) {
    book {
      slug
      title
      cached_contributors(path: "$.[0].author.name")
      cached_image
      id
      pages
    }
    user_book_reads(where: {finished_at: {_is_null: false}}) {
      finished_at
      user_book {
        rating
      }
    }
  }
}`;

      try {
        const fetchStartTime = Date.now();
        const authHeader = env.HARDCOVER_API_TOKEN ? `Bearer ${env.HARDCOVER_API_TOKEN}` : '';
        const response = await fetch('https://api.hardcover.app/v1/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader,
          },
          body: JSON.stringify({
            operationName: "MyQuery",
            query: graphqlQuery,
            variables: { username }
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          return new Response(`Hardcover API Error: ${errorText}`, { 
            status: response.status, 
            headers: corsHeaders 
          });
        }

        const data = await response.json();

        if (data.errors) {
          return new Response(JSON.stringify({
            message: "Hardcover GraphQL Validation Error",
            errors: data.errors,
            debug: { query: graphqlQuery, variables: { username } }
          }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const responseBody = JSON.stringify(data);

        // Store in cache for 1 hour (3600 seconds)
        if (env.BOOK_STACK_CACHE) {
          ctx.waitUntil(env.BOOK_STACK_CACHE.put(cacheKey, responseBody, { expirationTtl: 3600 }));
        }

        return new Response(responseBody, {
          status: response.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'X-Cache': 'MISS',
          }
        });
      } catch (error) {
        return new Response(`Error fetching GraphQL: ${error.message}`, { 
          status: 500, 
          headers: corsHeaders 
        });
      }
    }

    return new Response('Not found', { status: 404, headers: corsHeaders });
  },
};

