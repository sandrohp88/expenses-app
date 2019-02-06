import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocus: false,
      error: ''
    }
  }

  onDescriptionChange = sender => {
    const description = sender.target.value
    this.setState(() => ({ description }))
  }
  onNoteChange = sender => {
    const note = sender.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = sender => {
    const amount = sender.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocus: focused }))
  }
  onSubmit = sender => {
    sender.preventDefault()
    if (!this.state.description || !this.state.amount) {
      // Set error state
      this.setState({ error: 'Please provide description and amount' })
    } else {
      //Clear error
      this.setState({ error: '' })
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            id="amount"
            placeholder="Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onCalendarFocusChange}
            id="calendar_picker_expenses_app"
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            name="note"
            id="note"
            placeholder="Add note to your expense"
            cols="30"
            rows="10"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    )
  }
}

export { ExpenseForm }
