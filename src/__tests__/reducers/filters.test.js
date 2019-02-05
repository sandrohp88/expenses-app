import moment from 'moment'
import { filterReducer } from '../../redux/reducers/filterReduce'

test('Default filters', () => {
  const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const actual = filterReducer(undefined, { type: '@@INIT' })
  expect(actual).toEqual(defaultState)
})

test('SetTextFilter reducer', () => {
  const state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'Hola'
  }
  const actual = filterReducer(state, action)
  expect(actual).toEqual({
    text: 'Hola',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('SortByAmount reducer', () => {
  const action = {
    type: 'SORT_BY_AMOUNT'
  }
  const actual = filterReducer(undefined, action)
  expect(actual.sortBy).toEqual('amount')
})

test('SortByDate reducer', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {
    type: 'SORT_BY_DATE'
  }
  const actual = filterReducer(state, action)
  expect(actual.sortBy).toEqual('date')
})

test('SetStartDate reducer', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: 100,
    endDate: undefined
  }
  const action = {
    type: 'SET_START_DATE',
    startDate: 100
  }
  const actual = filterReducer(state, action)
  expect(actual.startDate).toBe(100)
})

test('SetEndDate reducer', () => {
  const state = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: 102
  }
  const action = {
    type: 'SET_START_DATE',
    endDate: 102
  }
  const actual = filterReducer(state, action)
  expect(actual.endDate).toBe(102)
})
