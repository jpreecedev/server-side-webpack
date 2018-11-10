/* eslint-disable no-underscore-dangle, no-console */

import React from 'react'
import webpack from 'webpack'
import express from 'express'
import { renderToString } from 'react-dom/server'

import App from '../client/App'
import config, { output } from '../../webpack.client'

const app = express()
const compiler = webpack(config)

app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: output.publicPath
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.get('/*', (req, res) => {
  res.render('pages/index', {
    reactAppCode: renderToString(<App />)
  })
})

app.listen(9955, error => {
  if (error) {
    console.error('Something went wrong!', error)
  }

  console.warn('Listening on http://localhost:9955')
})
