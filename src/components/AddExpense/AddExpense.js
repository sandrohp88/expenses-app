import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { addExpenseAsync } from '../../redux/actions/expenses'
export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.addExpenseAsync(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add expense component</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addExpenseAsync: expense => dispatch(addExpenseAsync(expense))
})
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense)
