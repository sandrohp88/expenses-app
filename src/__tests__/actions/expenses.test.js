import {
  addExpense,
  removeExpense,
  editExpense,
  addExpenseAsync,
  setExpenses
} from '../../redux/actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import AddExpense from '../../components/AddExpense/AddExpense'
import expenses from '../../sampleData/expenses'
import { expensesRef } from '../../firebase/firebase'
const createMockStore = configureMockStore([thunk])

beforeEach(async () => {
  console.log(expensesRef)
  const response = await expensesRef.get()
  const deleteAsync = await response.forEach(ex => ex.delete())
  if (deleteAsync) {
    expenses.forEach(async exp => {
      await expensesRef.add(exp)
    })
  }
})
xit('Remove Expense action', () => {
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
  const actual = addExpense(expenses[1])
  expect(actual).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  })
})

it('add addExpense to database and store', async () => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    amount: 300,
    note: 'good one',
    createdAt: 1988
  }
  const response = await store.dispatch(addExpenseAsync(expenseData))
  expect(response).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) }
  })

  const actions = store.getActions()
  expect(actions[0]).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

it('set up expenses with data', () => {
  const actual = setExpenses(expenses)
  expect(actual).toEqual({ type: 'SET_EXPENSES', expenses })
})
// test('Add expense without values', () => {
//   const actual = addExpense()
//   expect(actual).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   })
// })
