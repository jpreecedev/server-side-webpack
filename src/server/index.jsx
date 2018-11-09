/* eslint-disable no-underscore-dangle, no-console */

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../client/App'

const app = express()
app.use(express.static('./dist/client'))
app.engine('ejs', require('ejs').__express)

app.set('view engine', 'ejs')

app.get('/*', (req, res) => {
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
