const { createStore, combineReducers } = require("redux");

// Declare product constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// Declare cart constants 
const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";

// initial product state
const initialProductState = {
   products: [],
   numberOfProducts: 0
}
// initial cart state
const initialCartState = {
  cart: [],
  numberOfProducts: 0,
};

//get products action
const getProducts = (product) => {
   return {
      type: GET_PRODUCTS,
      payload: product,
   }
}
//add product action
const addProduct = (product) => {
   return {
      type: ADD_PRODUCT,
      payload: product,
   }
}
//get cart product action
const getCartProduct = (product) => {
   return {
      type: GET_CART_PRODUCTS,
      payload: product,
   }
}
//add cart product action
const addCartProduct = (product) => {
   return {
      type: ADD_TO_CART,
      payload: product,
   }
}

//products reducer function
const productReducer = (state = initialProductState, action) => {
   switch (action.type) {
      case GET_PRODUCTS:
         return {
            ...state
         }
      case ADD_PRODUCT:
         return {
           products: [...state.products,action.payload],
           numberOfProducts: state.numberOfProducts + 1,
         };
      default:
         return state;
   }

};
//cart reducer function
const cartReducer = (state = initialCartState, action) => {
   switch (action.type) {
      case GET_CART_PRODUCTS:
         return {
            ...state
         }
      case ADD_TO_CART:
         return {
           cart: [...state.cart,action.payload],
           numberOfProducts: state.numberOfProducts + 1,
         };
      default:
         return state;
   }

};

//combine reducer
const rootReducer = combineReducers({
   productReducer,
   cartReducer
})

//store
const store = createStore(rootReducer);

//subscribe
store.subscribe(() => {
   console.log(store.getState())
});

//dispatch product
store.dispatch(getProducts());
store.dispatch(addProduct("Watch"));
store.dispatch(addProduct("PC"));


//dispatch cart product
store.dispatch(getCartProduct());
store.dispatch(addCartProduct("Watch"));
