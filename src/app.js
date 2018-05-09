import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' //provide the store to all of the components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';


import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
console.log('Initializing app');

ReactDOM.render(jsx, document.getElementById('app'));

