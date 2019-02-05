import { expensesReducer } from '../../redux/reducers/expensesReducer'

test('AddExpense reducer', () => {
  const state = [
    { id: '0', note: 'Sandro Herrera', description: 'Hello', createdAt: 0 },
    { id: '1', note: 'Hi there', description: 'people', createdAt: 1 },
    { id: '2', note: 'Welcome', description: 'Aloha', createdAt: 2 }
  ]
  const newExpense = {
    id: '3',
    note: 'Sandro Herrera',
    description: 'Hello',
    createdAt: 0
  }
  const action = { type: 'ADD_EXPENSE', expense: newExpense }

  const actual = expensesReducer(state, action)
  expect(actual).toEqual([...state, newExpense])
})

test('RemoveExpense reducer existing id', () => {
  const state = [
    { id: '0', note: 'Sandro Herrera', description: 'Hello', createdAt: 0 },
    { id: '1', note: 'Hi there', description: 'people', createdAt: 1 },
    { id: '2', note: 'Welcome', description: 'Aloha', createdAt: 2 }
  ]
  const action = { type: 'REMOVE_EXPENSE', id: '0' }
  const actual = expensesReducer(state, action)
  expect(actual).toEqual([state[1], state[2]])
})

test('RemoveExpense reducer non existing id', () => {
  const state = [
    { id: '0', note: 'Sandro Herrera', description: 'Hello', createdAt: 0 },
    { id: '1', note: 'Hi there', description: 'people', createdAt: 1 },
    { id: '2', note: 'Welcome', description: 'Aloha', createdAt: 2 }
  ]
  const action = { type: 'REMOVE_EXPENSE', id: '3' }
  const actual = expensesReducer(state, action)
  expect(actual).toEqual([...state])
})

test('EditExpense reducer', () => {
  const state = [
    { id: '0', note: 'Sandro Herrera', description: 'Hello', createdAt: 0 },
    { id: '1', note: 'Hi there', description: 'people', createdAt: 1 },
    { id: '2', note: 'Welcome', description: 'Aloha', createdAt: 2 }
  ]
  const updates = {
    note: 'Hi there',
    createdAt: 100
  }
  const action = { type: 'EDIT_EXPENSE', id: '0', updates }
  const actual = expensesReducer(state, action)
  expect(actual).toEqual([
    { id: '0', note: 'Hi there', description: 'Hello', createdAt: 100 },
    state[1],
    state[2]
  ])
})
