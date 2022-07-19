const { createStore } = require("redux");
// Declare state variable 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// initial state
const initialState = {
   count: 0,
}

//increment action
const incrementAction = () => {
   return {
     type: INCREMENT,
   }
}
//decrement action
const decrementAction = () => {
   return {
     type: DECREMENT,
   }
}

//reducer 
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
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementAction());
