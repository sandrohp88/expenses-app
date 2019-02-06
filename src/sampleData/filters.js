import moment from 'moment'

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const allFilters = {
  text: 'locol',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}
export { allFilters, filters }
