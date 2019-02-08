import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense/AddExpense'
import expenses from '../../sampleData/expenses'

let addExpenseAsync, history, wrapper
beforeEach(() => {
  addExpenseAsync = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpense addExpenseAsync={addExpenseAsync} history={history} />)
})

test('render Add page without crash', () => {
  expect(wrapper).toMatchSnapshot()
})
test('handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpenseAsync).toHaveBeenLastCalledWith(expenses[2])
})
