import React from 'react'
import ExpenseList from '../ExpenseList/ExpenseList'
import ExpensesFilterInput from '../ExpensesFilterInput/ExpensesFilterInput'
const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpensesFilterInput />
    <ExpenseList />
  </div>
)

export { Dashboard }
