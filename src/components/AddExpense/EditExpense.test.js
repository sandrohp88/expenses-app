import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense/EditExpense'
import expenses from '../../sampleData/expenses'

let editExpense, history, wrapper, removeExpense
beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpense
      expense={expenses[2]}
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
    />
  )
})

test('render edit expense without crash', () => {
  expect(wrapper).toMatchSnapshot()
})
test('handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
})
test('handle remove expense', () => {
  wrapper.find('button').simulate('click')
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id)
  expect(history.push).toHaveBeenLastCalledWith('/')
})
