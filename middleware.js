const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Declare product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// initial product state
const initialProductState = {
  products: [],
  numberOfProducts: 0,
};

//get products action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
//add product action
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//products reducer function
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(productReducer, applyMiddleware(logger));

//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch product
store.dispatch(getProducts());
store.dispatch(addProduct("Watch"));
store.dispatch(addProduct("PC"));
store.dispatch(addProduct("Laptop"));
