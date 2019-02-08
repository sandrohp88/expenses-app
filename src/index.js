import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App/App'
import { configureStore } from './redux/store/configureStore'
import { Provider } from 'react-redux'
import { getExpensesAsync,addExpenseAsync } from './redux/actions/expenses'
import * as serviceWorker from './serviceWorker'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <p>Loading...</p>
  </Provider>,

  document.getElementById('root')
)

store.dispatch(getExpensesAsync()).then(() =>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

})

// getExpensesAsync().then(
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )
// )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
