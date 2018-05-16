import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



export default class ExpenseForm extends React.Component {


  constructor(props) {
    super(props);
    const { expense = {} } = props;
    const { description = "", note = "", amount = "", createdAt } = expense;
    this.state = {
      description: description,
      note: note,
      amount: amount && (amount / 100).toString(),
      createdAt: moment(),
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
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { description, amount, note, createdAt } = this.state;
    if (!description || !this.state.amount) {
      this.setState(() => {
        return {
          error: "Please provide description and amount."
        }
      });
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description,
        amount: parseFloat(amount) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  }
  //only dispatch if user submits the form.
  render() {
    return (
      <form
        className="form"
        onSubmit={this.onSubmit}>
        {
          this.state.error &&
          <p className="form__error">{this.state.error}</p>
        }
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          className="text-input"
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          className="text-area"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button type="submit" className="button"> Save Expense </button>
        </div>

      </form>
    )
  }
}