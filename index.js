const { createStore } = require("redux");

// Declare constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// initial state
const initialState = {
  count: 0,
};

//increment action
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
//decrement action
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
//reset action
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};
//increment by value action
const incrementCounterActionByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
//reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

// store getState(); dispatch(); subscribe();

//create store
const store = createStore(counterReducer);

//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterActionByValue(5));
store.dispatch(incrementCounterActionByValue(15));
