let config = {}
if (process.env.NODE_ENV === 'development') {
  config = {
    // server: 'http://143.244.134.89',
    server: 'http://localhost:3000',
    environment: 'development',
  }
} else if (process.env.NODE_ENV === 'production') {
  config = {
    server: 'http://143.244.134.89',
    environment: 'production',
  }
}

export default config