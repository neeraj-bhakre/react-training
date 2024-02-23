// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';

export function addToCart(item){
  return{
      type: ADD_TO_CART,
      item
  }
}

export function removeFromCart(itemId){
  return{
      type: REMOVE_FROM_CART,
      itemId
  }
}

export function subtractQuantity(itemId){
  return{
      type: SUB_QUANTITY,
      itemId
  }
}

export function addQuantity(itemId){
  return{
      type: ADD_QUANTITY,
      itemId
  }
}

export function emptyCart(){
  return{
      type: EMPTY_CART
  }
}