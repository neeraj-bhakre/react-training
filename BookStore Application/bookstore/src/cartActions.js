// actions/cartActions.js
export const removeFromCart = (book) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: book
    };
  };