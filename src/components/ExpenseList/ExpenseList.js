import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import getVisibleExpenses from '../VisibleExpenses/VisibleExpenses'
import styles from './ExpenseList.module.scss'
export const ExpenseList = props => (
  <div className={styles.contentContainer}>
    <div className={styles.listHeader}>
      <div className={styles.showMobil}>Expenses</div>
      <div className={styles.showDesktop}>Expense</div>
      <div className={styles.showDesktop}>Amount</div>
    </div>
    {props.expenses.length === 0 ? (
      <p className={styles.noExpenses}>No expenses to show</p>
    ) : (
      <div>
        {props.expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </div>
    )}
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
