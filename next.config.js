module.exports = {
  webpack(config, options) {
    config.modules.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, {loader: 'graphql-let/loader'}],
    })
    
    config.modules.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, {loader: 'graphql-let/loader'}],
    })
    
    config.modules.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader'
    })

    return config
  }
}