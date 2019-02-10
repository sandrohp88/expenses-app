import React from 'react'
import { connect } from 'react-redux'
import { signInAsync } from '../../redux/actions/auth'
import style from './Login.module.scss'

export const Login = ({ signInAsync }) => {
  return (
    <div className={style.boxLayout}>
      <div className={style.boxLayout__box}>
        <h2 className={style.header__title}>Expenses App</h2>
        <p>Keep track of your expenses</p>
        <button className={style.button} onClick={signInAsync}>
          Login with Google
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProp = dispatch => ({
  signInAsync: dispatch(signInAsync)
})

export default connect(
  undefined,
  mapDispatchToProp
)(Login)
