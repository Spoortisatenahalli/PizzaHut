export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter(
            (c) => c.productId !== action.payload.productId
          ),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.productId === action.payload.productId
              ? (c.qty = action.payload.qty)
              : c.qty
          ),
        };
      default:
        return state;
    }
  };