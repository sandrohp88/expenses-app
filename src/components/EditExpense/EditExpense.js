import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import {
  editExpenseAsync,
  removeExpenseAsync
} from '../../redux/actions/expenses'

export class EditExpense extends React.Component {
  onSubmit = expense => {
    this.props.editExpenseAsync(this.props.expense.id, expense)
    this.props.history.push('/dashboard')
  }

  onClick = () => {
    this.props.removeExpenseAsync(this.props.expense.id)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  }
}
const mapDispatchToProps = dispatch => ({
  removeExpenseAsync: id => dispatch(removeExpenseAsync(id)),
  editExpenseAsync: (id, updates) => dispatch(editExpenseAsync(id, updates))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense)
