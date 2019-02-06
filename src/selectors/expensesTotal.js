const getTotalExpenses = expenses =>
  expenses.reduce(
    (accumulator, currentExpense) => accumulator + currentExpense.amount,
    0
  )
export { getTotalExpenses }
