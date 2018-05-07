import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {


  constructor(props){
    super(props);
    const {expense = {}} = props;
    const {description = "", note ="", amount = "", createdAt} = expense;
    this.state = {
      description: description,
      note: note,
      amount: amount && (amount /100).toString(),
      createdAt: moment(createdAt),
      calendarFocused: false,
      error: ""
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }))
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }))
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(()=>({
        createdAt
      }));
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(()=>({
      calendarFocused: focused
    }));
  };

  onSubmit = (e)=> {
    e.preventDefault();

    const {description, amount, note, createdAt} = this.state;
    if(!description || !this.state.amount){
      this.setState(()=>{
        return {
          error: "Please provide description and amount."
        }
      });
    } else {
      this.setState(()=>({
          error: ""
        }));
      this.props.onSubmit({
        description,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
        note,
      });
      console.log("submitted");
    }
  }
  //only dispatch if user submits the form.
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {
            this.state.error &&
            <p>{this.state.error}</p>
          }
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <br/>
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br/>
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=> false }
          />
          <br/>
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <br/>
          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}