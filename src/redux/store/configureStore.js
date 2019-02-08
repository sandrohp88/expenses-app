import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { expensesReducer } from '../reducers/expensesReducer'
import { filterReducer } from '../reducers/filterReduce'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}

export { configureStore }
