import moment from 'moment'
import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseForm } from '../../components/ExpenseForm/ExpenseForm'
import expenses from '../../sampleData/expenses'
import { wrap } from 'module'
test('should render ExpenseForm without data', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
test('render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', { preventDefault: () => {} })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: 'new description' } })
  expect(wrapper.state('description')).toBe('new description')
})

test('set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('textarea')
    .simulate('change', { target: { value: 'new note value' } })
  expect(wrapper.state('note')).toBe('new note value')
})

test('set valid amount', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: '12.22' } })
  expect(wrapper.state('amount')).toBe('12.22')
})

test('set invalid amount', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: '12.222' } })
  expect(wrapper.state('amount')).toBe('')
})

test('call onSubmit prop for valid form submision', () => {
  const onSubmiSpy = jest.fn()
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmiSpy} />
  )
  wrapper.find('form').simulate('submit', { preventDefault: () => {} })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmiSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('set new date onDateChange', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toBe(now)
})

test('set calendar focus', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
    focused: true
  })
  expect(wrapper.state('calendarFocus')).toBe(true)
})
