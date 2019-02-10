import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import { configureStore } from './redux/store/configureStore'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { getExpensesAsync } from './redux/actions/expenses'
import { login, logout } from './redux/actions/auth'
import firebase from 'firebase'
import './goblalStyles/goblalStyles.scss'
import Loading from './components/Loading/Loading'




const store = configureStore()

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
      )
      hasRendered = true
    }
  }
  ReactDOM.render(<Loading/>, document.getElementById('root'))
  
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    // User is signed in.
    store.dispatch(login(user.uid))
    await store.dispatch(getExpensesAsync())
    renderApp()
  } else {
    // No user is signed in.
    renderApp()
    store.dispatch(logout())
  }
})

// store.dispatch(getExpensesAsync()).then(() => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   )
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
