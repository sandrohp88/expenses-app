import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndtDate
} from '../../redux/actions/filters'
import moment from 'moment'

test('SetStartDate action', () => {
  const actual = setStartDate(moment(0))

  expect(actual).toEqual({ type: 'SET_START_DATE', startDate: moment(0) })
})

test('SetEndDate', () => {
  const actual = setEndtDate(moment(1))
  expect(actual).toEqual({ type: 'SET_END_DATE', endDate: moment(1) })
})

test('SetTextFilter with text', () => {
  const actual = setTextFilter('sandro')
  expect(actual).toEqual({ type: 'SET_TEXT_FILTER', text: 'sandro' })
})

test('SetTextFilter action without text', () => {
  const actual = setTextFilter()
  expect(actual).toEqual({ type: 'SET_TEXT_FILTER', text: '' })
})

test('SortByAmount action', () => {
  const actual = sortByAmount()
  expect(actual).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('SortByDate action', () => {
  const actual = sortByDate()
  expect(actual).toEqual({ type: 'SORT_BY_DATE' })
})
