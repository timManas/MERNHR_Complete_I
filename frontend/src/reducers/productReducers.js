import React from 'react'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from '../constants/productConstants'

export const listProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {}
    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { error: action.payload }
    default:
      return {}
  }
}
