import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = props => (
  <header>
    <h1>Expenses</h1>
    <NavLink to="/" exact={true}>Dashboard</NavLink>
    <NavLink to="/create">Create Expense</NavLink>
    <NavLink to="/help">Help</NavLink>
  </header>
)

export { Header }
