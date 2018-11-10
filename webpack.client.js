const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: {
    main: ['./src/client/index.jsx']
  },
  output: {
    filename: './client/[name].js'
  }
})
