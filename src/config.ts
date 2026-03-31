export const config = {

  // Function to get proxied image URL
  getProxiedImageUrl: (originalUrl: string) => {
    return `/image-proxy?url=${encodeURIComponent(originalUrl)}`
  },

  // Function to get GraphQL data
  getGraphqlUrl: (username: string) => {
    return `/graphql?username=${encodeURIComponent(username)}`
  },

  enableGifCapture: true
}