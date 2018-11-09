/* eslint-disable no-underscore-dangle, no-console */

import express from 'express'
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../client/App'

const clientConfig = require('../../webpack.client')
const serverConfig = require('../../webpack.server')

const multiCompiler = webpack([clientConfig, serverConfig])

const app = express()
app.use(express.static('./dist/client'))
app.engine('ejs', require('ejs').__express)

app.use(
  require('webpack-dev-middleware')(multiCompiler, {
    noInfo: true,
    publicPath: '/',
    serverSideRender: true
  })
)
app.use(require('webpack-hot-middleware')(multiCompiler.compilers[0]))

app.use(require('webpack-hot-server-middleware')(multiCompiler))

app.set('view engine', 'ejs')

app.get('/*', (req, res) => {
  process.stdout.write('rendering')
  res.render('pages/index', {
    reactAppCode: renderToString(<App />)
  })
})

app.use((req, res) => {
  res.redirect('/')
})

app.listen(9955, error => {
  if (error) {
    console.error('Something went wrong!', error)
  }

  console.warn('Listening on http://localhost:9955')
})
