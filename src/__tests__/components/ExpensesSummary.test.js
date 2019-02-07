import { ExpensesSummary } from '../../components/ExpensesSummary/ExpensesSummary'
import { shallow } from 'enzyme'
import expenses from '../../sampleData/expenses'
import React from 'react'
test('render without crash', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('render singular expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />)
  const singular = wrapper
    .find('h2')
    .text()
    .includes(' expense ')
  expect(singular).toBe(true)
})

test('render plural expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenses={[expenses[0], expenses[2]]} />
  )
  const plural = wrapper
    .find('h2')
    .text()
    .includes(' expenses ')
  expect(plural).toBe(true)
})
