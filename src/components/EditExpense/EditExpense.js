import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import {
  editExpenseAsync,
  removeExpenseAsync
} from '../../redux/actions/expenses'
import styles from './EditExpense.module.scss'
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
        <div className={styles.pageHeader}>
          <div className={styles.contentContainer}>
            <h1 className={styles.pageHeader__title}>Edit Expense</h1>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
          <button className={styles.button__secondary} onClick={this.onClick}>
            Remove
          </button>
        </div>
      </div>
    )
  }
}
{
  /* <div>
  <div className={styles.pageHeader}>
    <div className={styles.contentContainer}>
      <h1 className={styles.pageHeader__title}>Add Expense</h1>
    </div>
  </div>
  <div className={styles.contentContainer}>
    <ExpenseForm onSubmit={this.onSubmit} />
  </div>
</div> */
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
