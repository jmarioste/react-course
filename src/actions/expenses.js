import uuid from "uuid";
import database from '../firebase/firebase';
//add 
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = '',
      note = '',
      amount = 0,
      createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`/users/${uid}/expenses`).push(expense).then((ref) => {
      return dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};


//Action Creators
//remove 
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses/${id}`).remove()
      .then(() => {
        return dispatch(removeExpense({ id }))
      }).catch((error) => {
        console.log('error', e.message);
      })
  }
};

//edit expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses/${id}`).update(updates)
      .then(() => {
        return dispatch(editExpense(id, updates));
      }).catch((error) => {
        console.log('error', e.message);
      });
  }
};


export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses`).once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          const id = childSnapshot.key;
          expenses.push({
            id,
            ...childSnapshot.val()
          });
        });
        return dispatch(setExpenses(expenses));
      }).catch((e) => {
        console.log('error', e.message);
      })
  }
}
//SET_EXPENSES