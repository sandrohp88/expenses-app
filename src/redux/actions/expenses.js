import { firebase } from '../../firebase/firebase'
// ADD_EXPENSE
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

// ADD_EXPENSE_ASYNC
const addExpenseAsync = (expenseData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().logged.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    const response = await firebase
      .firestore()
      .collection(`users/${uid}/expenses`)
      .add(expense)
    return dispatch(addExpense({ id: response.id, ...expense }))
  }
}

// REMOVE_EXPENSE
const removeExpense = (id = '') => ({ type: 'REMOVE_EXPENSE', id })

// REMOVE_EXPENSE_ASYNC

const removeExpenseAsync = (id = '') => {
  return async (dispacth, getState) => {
    const uid = getState().logged.uid
    try {
      await firebase
        .firestore()
        .collection(`users/${uid}/expenses`)
        .doc(id)
        .delete()
      return dispacth(removeExpense(id))
    } catch (error) {
      console.log('Delete Error', error)
    }
  }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => ({ type: 'EDIT_EXPENSE', id, updates })
// EDIT_EXPENSE_ASYNC
const editExpenseAsync = (id, updates) => {
  return async (dispatch, getState) => {
    const uid = getState().logged.uid
    await firebase
      .firestore()
      .collection(`users/${uid}/expenses`)
      .doc(id)
      .update(updates)
    return dispatch(editExpense(id, updates))
  }
}

// SET_EXPENSES
const setExpenses = expenses => ({ type: 'SET_EXPENSES', expenses })

// GET_EXPENSES_ASYNC
const getExpensesAsync = () => {
  return async (dispatch, getState) => {
    const uid = getState().logged.uid
    const response = await firebase
      .firestore()
      .collection(`users/${uid}/expenses`)
      .get()
    const expenses = []
    console.log('uid :', uid)
    response.forEach(expense => {
      const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
      } = expense.data()
      expenses.push({ id: expense.id, description, note, amount, createdAt })
    })
    return dispatch(setExpenses(expenses))
  }
}

export {
  getExpensesAsync,
  addExpense,
  addExpenseAsync,
  removeExpense,
  removeExpenseAsync,
  editExpense,
  editExpenseAsync,
  setExpenses
}
