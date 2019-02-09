import React from 'react'
import Header from '../../components/Header/Header'
import ExpenseList from '../ExpenseList/ExpenseList'
import ExpensesFilterInput from '../ExpensesFilterInput/ExpensesFilterInput'
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary'
const Dashboard = () => {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <ExpensesFilterInput />
      <ExpensesSummary />
      <ExpenseList />
    </div>
  )
}

export { Dashboard }
