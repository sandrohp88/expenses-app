import { getTotalExpenses } from '../../selectors/expensesTotal'
import expenses, { totalAmount } from '../../sampleData/expenses'

test('add multilpe expenses correctly', () => {
  const actual = getTotalExpenses(expenses)
  expect(actual).toBe(totalAmount)
})
test('add single expense correctly', () => {
  const actual = getTotalExpenses([expenses[0]])
  expect(actual).toBe(195)
})
test('should return 0 for empty array of expenses', () => {
  const actual = getTotalExpenses([])
  expect(actual).toBe(0)
})
