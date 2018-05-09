import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



export class EditExpensePage extends Component {

  onSubmit = (id, updates) => {
    this.props.editExpense(id, updates);
    this.props.history.push('/');
  };

  onClickRemove = () => {
    const id = this.props.expense.id;
    this.props.removeExpense({ id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />

        <button onClick={this.onClickRemove}>
          Remove
        </button>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, updates) => {
      return dispatch(editExpense(id, updates));
    },
    removeExpense: ({ id }) => {
      dispatch(removeExpense({ id }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);