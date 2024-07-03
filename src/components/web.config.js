resolve: {
  fallback: {
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib")
  }
}
