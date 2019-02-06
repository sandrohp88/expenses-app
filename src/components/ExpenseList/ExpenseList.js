import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import getVisibleExpenses from '../VisibleExpenses/VisibleExpenses'
export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses to show</p>
    ) : (
      <div>
        <h1>My expenses</h1>
        <ul>
          {props.expenses.map(expense => (
            <ExpenseItem key={expense.id} {...expense} />
          ))}
        </ul>
      </div>
    )}
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
