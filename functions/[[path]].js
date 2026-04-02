export async function onRequest(context) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  const secFetchSite = request.headers.get('sec-fetch-site');
  const secFetchMode = request.headers.get('sec-fetch-mode');

  // Restrict API endpoints from being accessed via direct browser navigation or other sites
  if (url.pathname === '/image-proxy' || url.pathname === '/graphql') {
    // Only allow requests from our own origin
    if (secFetchSite && secFetchSite !== 'same-origin') {
      return new Response('Access denied: Requests must originate from the application.', { status: 403 });
    }
    // Block direct browser navigation to API endpoints
    if (secFetchMode === 'navigate') {
      return new Response('Forbidden: API endpoints cannot be accessed directly in the browser.', { status: 403 });
    }
  }

  // --- ENDPOINT: /image-proxy ---
  if (url.pathname === '/image-proxy') {
    const imageUrl = url.searchParams.get('url');
    if (!imageUrl) {
      return new Response('Missing image URL', { status: 400 });
    }

    try {
      const response = await fetch(imageUrl, {
        headers: { 'User-Agent': 'Cloudflare Pages Image Proxy' }
      });

      if (!response.ok) {
        return new Response(`Failed to fetch: ${response.statusText}`, { status: response.status });
      }

      const responseHeaders = new Headers(response.headers);
      responseHeaders.set('Cache-Control', 'public, max-age=86400');
      // Ensure we don't accidentally leak non-standard headers
      responseHeaders.delete('set-cookie');

      return new Response(response.body, {
        status: response.status,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response(`Error proxying image: ${error.message}`, { status: 500 });
    }
  }

  // --- ENDPOINT: /graphql ---
  if (url.pathname === '/graphql') {
    const username = url.searchParams.get('username');
    if (!username) {
      return new Response('Missing username parameter', { status: 400 });
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
          headers: { 'Retry-After': '60' } 
        });
      }
      
      waitUntil(env.BOOK_STACK_CACHE.put(rateLimitKey, (count + 1).toString(), { expirationTtl: 120 }));
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
        edition {
          reading_format {
            format
          }
        }
      }
    }
  }
}`;

    try {
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
        return new Response(`Hardcover API Error: ${errorText}`, { status: response.status });
      }

      const data = await response.json();

      if (data.errors) {
        return new Response(JSON.stringify({
          message: "Hardcover GraphQL Validation Error",
          errors: data.errors,
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const responseBody = JSON.stringify(data);

      if (env.BOOK_STACK_CACHE) {
        waitUntil(env.BOOK_STACK_CACHE.put(cacheKey, responseBody, { expirationTtl: 3600 }));
      }

      return new Response(responseBody, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'X-Cache': 'MISS',
        }
      });
    } catch (error) {
      return new Response(`Error fetching GraphQL: ${error.message}`, { status: 500 });
    }
  }

  return context.next();
}
