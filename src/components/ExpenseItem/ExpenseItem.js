import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
const ExpenseItem = ({ description, amount, createAt, id }) => (
  <div>
    <li>
      <Link to={`edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}-
        {moment(createAt).format('MMMM Do YYYY')}
      </p>
    </li>
  </div>
)

export default ExpenseItem
