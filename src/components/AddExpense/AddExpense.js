import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { addExpense } from '../../redux/actions/expenses'
const AddExpense = ({ dispatch, history }) => (
  <div>
    <h1>Add expense component</h1>
    <ExpenseForm
      onSubmit={expense => {
        dispatch(addExpense(expense))
        history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpense)
