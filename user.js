const { createStore } = require("redux");

// Declare action variable
const ADD_USER = "ADD_USER";

//initial state
const initialState = {
  users: [],
  count: 0,
};

//add user action
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

//create store
const store = createStore(userReducer);

//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUserAction("Yasin"));
store.dispatch(addUserAction("Ahmed"));
store.dispatch(addUserAction("Rony"));
