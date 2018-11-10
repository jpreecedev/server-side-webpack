import * as React from 'react'
import { hot } from 'react-hot-loader'

function App() {
  return (
    <div>
      Hello, world!
      <button type="button" onClick={() => alert('I was clicked!')}>
        Click me
      </button>
    </div>
  )
}

if (module.hot) {
  module.hot.accept()
}

export default hot(module)(App)
