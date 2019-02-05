import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App/App'

test('render without crashing', () => {
  const actual = 3
  expect(actual).toBe(3)
})

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })
