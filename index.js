const { createStore } = require("redux");

// Declare variable 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initial state
const initialState = {
   count: 0,
}

//increment action
const incrementCounterAction = () => {
   return {
     type: INCREMENT,
   }
}
//decrement action
const decrementCounterAction = () => {
   return {
     type: DECREMENT,
   }
}
//reset action
const resetCounterAction = () => {
   return {
     type: RESET,
   }
}

//reducer function
const counterReducer = (state=initialState,action) => {
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
      default:
         return state;
   }
}

// store getState(); dispatch(); subscribe();

//create store
const store = createStore(counterReducer);

//subscribe
store.subscribe(() => {
   console.log(store.getState())
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
