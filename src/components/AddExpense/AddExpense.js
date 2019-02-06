import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { addExpense } from '../../redux/actions/expenses'
export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.addExpense(expense)
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
  addExpense: expense => dispatch(addExpense(expense))
})
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense)
