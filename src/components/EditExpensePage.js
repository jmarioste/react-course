import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';



export class EditExpensePage extends Component {

  onSubmit = (updates) => {
    const id = this.props.expense.id;
    this.props.startEditExpense(id, updates);
    this.props.history.push('/dashboard');
  };

  onClickRemove = () => {
    const id = this.props.expense.id;
    this.props.startRemoveExpense({ id });
    this.props.history.push('/dashboard');
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
    startEditExpense: (id, updates) => {
      return dispatch(startEditExpense(id, updates));
    },
    startRemoveExpense: ({ id }) => {
      dispatch(startRemoveExpense({ id }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);