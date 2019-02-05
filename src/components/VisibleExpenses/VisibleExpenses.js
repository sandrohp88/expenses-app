import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMacth = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'):true
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true
      const textMatch =
        typeof text !== 'string' ||
        expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMacth && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? -1 : 1
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
      return 0
    })
}
export default getVisibleExpenses