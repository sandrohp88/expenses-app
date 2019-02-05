import getVisibleExpenses from '../../components/VisibleExpenses/VisibleExpenses'
import moment from 'moment'
const expenses = [
  {
    id: '0',
    description: 'Hola',
    note: 'World',
    amount: 200,
    createdAt: moment(0).valueOf()
  },
  {
    id: '1',
    description: 'Hola',
    note: 'Mundo',
    amount: 201,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '2',
    description: 'Aloha',
    note: 'Mundi',
    amount: 2003,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
]

test('Filter for text', () => {
  const filters = {
    text: 'hola',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const actual = getVisibleExpenses(expenses, filters)
  expect(actual).toEqual([expenses[0], expenses[1]])
})

test('Filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }

  const actual = getVisibleExpenses(expenses, filters)
  expect(actual).toEqual([expenses[2], expenses[0]])
})

test('Filter by EndDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const actual = getVisibleExpenses(expenses, filters)
  expect(actual).toEqual([expenses[0], expenses[1]])
})

test('SortByDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const actual = getVisibleExpenses(expenses, filters)
  expect(actual).toEqual([expenses[2], expenses[0], expenses[1]])
})
test('SortByAmount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const actual = getVisibleExpenses(expenses, filters)
  expect(actual).toEqual([expenses[2], expenses[1], expenses[0]])
})
