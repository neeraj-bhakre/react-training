// reducer.js
import { ADD_TO_CART } from './actions';

const initialState = {
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.book] };
    default:
      return state;
  }
}

export default reducer;