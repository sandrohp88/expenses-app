import React, { Component } from 'react'
import styles from './App.module.scss'
import { AppRouter } from '../routers/AppRouter'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <AppRouter />
      </div>
    )
  }
}

export default App