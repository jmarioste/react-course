import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' //provide the store to all of the components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';


import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {

  const { expenses, filters } = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});



store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

