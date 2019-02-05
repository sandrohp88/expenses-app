import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { editExpense, removeExpense } from '../../redux/actions/expenses'
const EditExpense = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      onSubmit={expe => {
        dispatch(editExpense(expense.id, expe))
        history.push('/')
      }}
      expense={expense}
    />
    <button
      onClick={e => {
        dispatch(removeExpense(expense.id))
        history.push('/')
      }}
    >
      Remove
    </button>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  }
}
export default connect(mapStateToProps)(EditExpense)
