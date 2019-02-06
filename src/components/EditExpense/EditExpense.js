import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { editExpense, removeExpense } from '../../redux/actions/expenses'

export class EditExpense extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  onClick = () => {
    this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/')
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
  removeExpense: id => dispatch(removeExpense(id)),
  editExpense: (id, updates) => dispatch(editExpense(id, updates))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense)
