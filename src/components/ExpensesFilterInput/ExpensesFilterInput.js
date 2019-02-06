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
export class ExpensesFilterInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarFocused: null
    }
  }
  OnDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndtDate(endDate)
  }
  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }))
  }
  onTextChange = event => {
    this.props.setTextFilter(event.target.value)
  }

  onSelectChange = event => {
    event.target.value === 'date'
      ? this.props.sortByDate()
      : this.props.sortByAmount()
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="filter"
          id="expenseFilter"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          name="selectFilter"
          id="selecFilter"
          value={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="startDateID"
          endDateId="endDateID"
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
const mapDispatchToProps = dispacth => ({
  sortByDate: () => dispacth(sortByDate),
  sortByAmount: () => dispacth(sortByAmount),
  setEndtDate: date => dispacth(setEndtDate(date)),
  setStartDate: date => dispacth(setStartDate(date)),
  setTextFilter: text => dispacth(setTextFilter(text))
})
export default connect(
  maptStateToProps,
  mapDispatchToProps
)(ExpensesFilterInput)
