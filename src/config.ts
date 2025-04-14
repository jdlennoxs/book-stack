export const config = {
  // The base URL for the proxy server
  proxyUrl: '/image-proxy',
  
  // Function to get proxied image URL
  getProxiedImageUrl: (originalUrl: string) => {
    return `${config.proxyUrl}?url=${encodeURIComponent(originalUrl)}`
  }
} 