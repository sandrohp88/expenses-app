import React from 'react'
import { Link } from 'react-router-dom'
import { signOutAsync } from '../../redux/actions/auth'
import { connect } from 'react-redux'

import styles from './Header.module.scss'
export const Header = ({ signOutAsync }) => (
  <header className={styles.header}>
    <div className={styles.contentContainer}>
      <div className={styles.header__content}>
        <Link to="/dashboard" className={styles.header__title}>
          <h1>Expenses</h1>
        </Link>
        <button className={`${styles.button} ${styles.button__link}`} onClick={signOutAsync}>Sign Out</button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = dispatch => ({
  signOutAsync: () => {
    dispatch(signOutAsync())
  }
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header)
