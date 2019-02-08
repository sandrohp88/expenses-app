import expensesRef from '../../firebase/firebase'
// ADD_EXPENSE
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

// ADD_EXPENSE_ASYNC
const addExpenseAsync = (expenseData = {}) => {
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

// SET_EXPENSES
const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses })

// GET_EXPENSES_ASYNC
const getExpensesAsync = () => {
  return async dispatch => {
    const response = await expensesRef.get()
    const expenses = []
    response.forEach(expense => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expense.data()
      expenses.push({id:expense.id, description, note, amount, createdAt })
    })
    return dispatch(setExpenses(expenses))
  }
}

export {
  getExpensesAsync,
  addExpense,
  addExpenseAsync,
  removeExpense,
  editExpense,
  setExpenses
}
