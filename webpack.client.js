const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  target: 'web',
  entry: {
    main: ['./src/client/index.jsx', 'webpack-hot-middleware/client']
  },
  output: {
    filename: './client/[name].js'
  }
})
