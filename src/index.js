import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App/App'
import { configureStore } from './redux/store/configureStore'
import { addExpense } from './redux/actions/expenses'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
const store = configureStore()

// store.dispatch(addExpense({ description: 'My rent', amount:4500,createAt:100 }))
// store.dispatch(addExpense({ description: 'Water', amount:145000,createAt:101 }))
// store.dispatch(addExpense({ description: 'Internet', amount:450000,createAt:102 }))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
