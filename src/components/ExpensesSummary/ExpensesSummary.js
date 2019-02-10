import React from 'react'
import getVisibleExpenses from '../VisibleExpenses/VisibleExpenses'
import { connect } from 'react-redux'
import { getTotalExpenses } from '../../selectors/expensesTotal'
import { Link } from "react-router-dom";
import styles from './ExpensesSummary.module.scss'
import numeral from 'numeral'
export const ExpensesSummary = ({ expenses }) => {
  const expenseWord = expenses.length > 1 ? 'expenses' : 'expense'
  const totalExpenses = numeral(getTotalExpenses(expenses) / 100).format(
    '$0,000.00'
  )
  return (
    <div className={styles.pageHeader}>
      <div className={styles.contentContainer}>
        <h2 className={styles.pageHeader__title}>
          Viewing{' '}
          <span className={styles.pageHeader__actions}>{expenses.length}</span>{' '}
          {expenseWord} totaling{' '}
          <span className={styles.pageHeader__actions}>{totalExpenses}</span>
        </h2>
        <div>
            <Link className={styles.button} to='/create'>Add expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)
