import React from 'react'
import { connect } from 'react-redux'
import { ExpenseForm } from '../ExpenseForm/ExpenseForm'
import { addExpenseAsync } from '../../redux/actions/expenses'
import styles from './AddExpense.module.scss'
export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.addExpenseAsync(expense)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <div className={styles.pageHeader}>
          <div className={styles.contentContainer}>
            <h1 className={styles.pageHeader__title}>Add Expense</h1>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
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
