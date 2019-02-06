import React from 'react'
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem'
import { shallow } from 'enzyme'
import expenses from '../../sampleData/expenses'

test('render ExpenseItem', () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
