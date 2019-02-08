import expensesRef from '../../firebase/firebase'
// ADD_EXPENSE
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

// ADD_EXPENSE_ASYNC
const addExpenseAsync =  (expenseData = {}) => {
  return async dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    const response = await expensesRef.add(expense)
    return dispatch(addExpense({ id: response.id, ...expense }))
  }
}

// REMOVE_EXPENSE
const removeExpense = (id = '') => ({ type: 'REMOVE_EXPENSE', id })

// EDIT_EXPENSE
const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates })

export { addExpense, addExpenseAsync, removeExpense, editExpense }
