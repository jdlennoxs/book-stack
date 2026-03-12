export const config = {
  // The base URL for the worker
  workerUrl: 'https://hardcover-proxy.jack-scott10.workers.dev',

  // Function to get proxied image URL
  getProxiedImageUrl: (originalUrl: string) => {
    return `${config.workerUrl}/image-proxy?url=${encodeURIComponent(originalUrl)}`
  },

  // Function to get GraphQL data
  getGraphqlUrl: (username: string) => {
    return `${config.workerUrl}/graphql?username=${encodeURIComponent(username)}`
  }
}