import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
    case CART_REMOVE_ITEM:
    case CART_SAVE_PAYMENT_METHOD:
    case CART_SAVE_SHIPPING_ADDRESS:
    default:
      return {}
  }
}
