import React from 'react'
import getVisibleExpenses from '../VisibleExpenses/VisibleExpenses'
import { connect } from 'react-redux'
import { getTotalExpenses } from '../../selectors/expensesTotal'
import numeral from 'numeral'
export const ExpensesSummary = ({ expenses }) => (
  <div>
    <h2>
      Viewing {expenses.length} {expenses.length > 1 ? 'expenses' : 'expense'}{' '}
      totaling {numeral(getTotalExpenses(expenses) / 100).format('$0,000.00')}
    </h2>
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)
