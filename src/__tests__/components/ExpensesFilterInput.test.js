import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesFilterInput } from '../../components/ExpensesFilterInput/ExpensesFilterInput'
import { allFilters, filters } from '../../sampleData/filters'

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate
beforeEach(() => {
  setEndDate = jest.fn()
  setTextFilter = jest.fn()
  sortByAmount = jest.fn()
  sortByDate = jest.fn()
  setStartDate = jest.fn()
  wrapper = shallow(
    <ExpensesFilterInput
      filters={filters}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  )
})
test('render ExpenseFilterInput without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

test('render ExpenseFilterInput with all data correctly', () => {
  wrapper.setProps({
    filters: allFilters
  })
  expect(wrapper).toMatchSnapshot()
})
