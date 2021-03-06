import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, _sortBy as sort, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onTextChange = (e) => {
    const value = e.target.value;
    this.props.setTextFilter(value);
  };

  onSortChange = (e) => {
    const value = e.target.value;
    console.log('onSortChange', value);
    this.props.sortBy(value);
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    const { filters } = this.props;
    const { text, sortBy } = filters;
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input type="text"
              className="text-input"
              placeholder="Search expenses"
              value={text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={sortBy}
              onChange={this.onSortChange}
            >
              <option value="date"> Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={filters.startDate}
              endDate={filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortBy: (value) => dispatch(sort(value)),
    setStartDate: (startDate) => {
      dispatch(setStartDate(startDate))
    },
    setEndDate: (endDate) => {
      dispatch(setEndDate(endDate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);