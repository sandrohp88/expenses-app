import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import styles from './ExpenseItem.module.scss'
const ExpenseItem = ({ description, amount, createdAt, id }) => (
  <Link
    to={`edit/${id}`}
    className={`${styles.listItem} ${styles.contentContainer}`}
  >
    <div>
      <h3 className={styles.listItem__title}>{description}</h3>
      <span className={styles.listItem__subtitle}>{moment(createdAt).format('MMMM Do YYYY')}</span>
    </div>
    <div>
      <h3 className={styles.listItem__data}>{numeral(amount / 100).format('$0,0.00')}</h3>
    </div>
  </Link>
)

export default ExpenseItem
