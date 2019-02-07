import React from 'react'
import ExpenseList from '../ExpenseList/ExpenseList'
import ExpensesFilterInput from '../ExpensesFilterInput/ExpensesFilterInput'
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary'
const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <ExpensesFilterInput />
    <ExpensesSummary />
    <ExpenseList />
  </div>
)

export { Dashboard }
