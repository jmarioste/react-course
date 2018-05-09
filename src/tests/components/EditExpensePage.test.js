import React from "react";
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  };

  wrapper = shallow(<EditExpensePage
    expense={expenses[0]}
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
  />);
})

test('should render edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const id = expenses[0].id;
  const updates = {
    anmount: 500
  }

  wrapper.find("ExpenseForm").prop('onSubmit')(id, updates);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(id, updates);
})

test('should handle removeExpense', () => {
  const id = expenses[0].id;

  wrapper.find("button").simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id });
})