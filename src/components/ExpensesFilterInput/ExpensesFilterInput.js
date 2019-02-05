import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndtDate
} from '../../redux/actions/filters'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
class ExpensesFilterInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarFocused: null
    }
  }
  OnDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndtDate(endDate))
  }
  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }))
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="filter"
          id="expenseFilter"
          value={this.props.filters.text}
          onChange={event => {
            this.props.dispatch(setTextFilter(event.target.value))
          }}
        />
        <select
          name="selectFilter"
          id="selecFilter"
          value={this.props.filters.sortBy}
          onChange={event => {
            event.target.value === 'date'
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount())
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        startDateId='startDateID'
        endDateId='endDateID'
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.OnDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}
const maptStateToProps = state => ({ filters: state.filters })

export default connect(maptStateToProps)(ExpensesFilterInput)
