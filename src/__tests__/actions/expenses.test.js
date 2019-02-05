import {
  addExpense,
  removeExpense,
  editExpense
} from '../../redux/actions/expenses'
import AddExpense from '../../components/AddExpense/AddExpense'

test('Remove Expense action', () => {
  const actual = removeExpense('123abc')
  expect(actual).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' })
})
test('Edit Expense action', () => {
  const actual = editExpense('123abc', {
    description: 'hello',
    createAt: 12,
    note: 'sandro'
  })
  expect(actual).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'hello',
      createAt: 12,
      note: 'sandro'
    }
  })
})
test('Add expense with values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'with values',
    amount: 5,
    createdAt: 1000
  }
  const actual = addExpense(expenseData)
  expect(actual).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})
test('Add expense without values', () => {
  const actual = addExpense()
  expect(actual).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
