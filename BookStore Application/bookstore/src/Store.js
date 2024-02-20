// store.js
import { createStore } from 'redux';

const initialState = {
  cart: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}

const store = createStore(cartReducer);

export default store;