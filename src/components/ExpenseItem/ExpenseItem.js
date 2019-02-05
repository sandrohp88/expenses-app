import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom";

const ExpenseItem = ({ description, amount, createAt, id }) => (
  <div>
    <li>
      <Link to={`edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {moment(createAt).format("MMM Do YY")}
      </p>
      
    </li>
  </div>
)

export default ExpenseItem
