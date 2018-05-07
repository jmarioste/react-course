import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpensesList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map((expense)=>{
        return <ExpenseListItem key={expense.id} {...expense}/>
      })
    }
  </div>
);

//automatically runs when state changes
const mapStateToProps = (state)=>{
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesList);
