import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOutAsync } from '../../redux/actions/auth'
import { connect } from 'react-redux'
export const Header = ({ signOutAsync }) => (
  <header>
    <h1>Expenses</h1>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
    <NavLink to="/help">Help</NavLink>
    <button onClick={signOutAsync}>Sign Out</button>
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
