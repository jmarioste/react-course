import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET',
  count: 0
})

//reducers - needs to be a pure function
// output  depends solely on the input
// never change state or action - changing state may have undesired effects

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':

      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
    case 'RESET':
      return {
        count: action.count
      }
    default:
      return state;

  }
}

//createStore - function to create the store (reducer);
//action generators - functions that create action object
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


//Actions - allows to change the store
//Action - object that gets sent to the store
//  - describe the action: walk, stop_walking, sit, work, stop_working, etc.

//increment, decrement, reset
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })
store.dispatch(incrementCount({ incrementBy: 5 }));
// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));