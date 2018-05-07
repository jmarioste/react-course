import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, _sortBy as sort, setStartDate, setEndDate} from '../actions/filters';


class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,

  }
  handleTextChange = (e) => {
    const {dispatch} = this.props;
    dispatch(setTextFilter(e.target.value));
  }

  handleSortByChange = (e) => {
    const val = e.target.value;
    const {dispatch} = this.props;
    dispatch(sort(val));
  }

  onDatesChange = ({startDate, endDate}) => {

    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (calendarFocused) => {
    this.setState(()=>({calendarFocused}));
  }
  render () {
    const {filters, dispatch} = this.props;
    const {text, sortBy} = filters;
    console.log(filters);
    return (
      <div>
        <input type="text" value={text} 
          onChange={this.handleTextChange
        }/>
        
        <select value={sortBy} 
          onChange={(e)=>this.handleSortByChange
        }> 
          <option value="date"> Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={()=> false}
          showClearDates={true}
        />
      </div>
    ) 
  }
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);