import React from 'react'
import ExpenseList from '../ExpenseList/ExpenseList'
import ExpensesFilterInput from '../ExpensesFilterInput/ExpensesFilterInput'
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary'
const Dashboard = () => {
  
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <ExpensesSummary />
      <ExpensesFilterInput />
      <ExpenseList />
    </div>
  )
}

export { Dashboard }
