import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem  from '../ExpenseItem/ExpenseItem'
import getVisibleExpenses  from "../VisibleExpenses/VisibleExpenses";
const ExpenseList = props => (
  <div>
    {props.expenses.length > 0 && <h1>My expenses</h1>}
    <ul>
      {props.expenses.map(expense => (
          <ExpenseItem key = { expense.id}{...expense} />
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
