import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList/ExpenseList'
import expenses from '../../sampleData/expenses'

test('render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})
test('render ExpenseList without expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
  expect(wrapper.find('p').length).toBe(1)
})
