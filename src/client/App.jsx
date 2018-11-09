import * as React from 'react'

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

export default App
