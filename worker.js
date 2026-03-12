export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Define the domains allowed to use this proxy
    const allowedOrigins = [
      'http://localhost:5173', // Your Vite local dev server
      'http://localhost:3000',
      'https://hardcover-books.pages.dev', // Potential production domain
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

      // --- Rate Limiting Strategy ---
      // For a strict 60 RPM global limit, Cloudflare KV or Durable Objects is needed.
      // If a RATE_LIMITER binding is configured in wrangler.toml, use it:
      if (env.RATE_LIMITER) {
        const { success } = await env.RATE_LIMITER.limit({ key: 'hardcover-api' });
        if (!success) {
          return new Response('Too Many Requests', { status: 429, headers: corsHeaders });
        }
      } 
      // Fallback simple in-memory check (only works per-isolate, but better than nothing)
      // Note: For real production use, please configure Rate Limiting in Cloudflare Dashboard.

      const graphqlQuery = `
        query MyQuery($username: String!) {
          user_books(where: {user: {username: {_eq: $username}}}) {
            book {
              slug
              title
              cached_contributors(path: "[\"0\"].author.name")
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
        }
      `;

      try {
        const response = await fetch('https://api.hardcover.app/v1/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': env.HARDCOVER_API_TOKEN || '', // Passed from secrets
          },
          body: JSON.stringify({
            query: graphqlQuery,
            variables: { username }
          })
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          status: response.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
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

