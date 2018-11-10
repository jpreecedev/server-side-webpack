const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  externals: nodeExternals(),
  entry: {
    main: './src/server/index.jsx'
  },
  output: {
    filename: './server/[name].js'
  }
})
