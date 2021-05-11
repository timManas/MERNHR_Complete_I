import React from 'react'
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../constants/productConstants'

export const listProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {}
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload }
    case GET_PRODUCTS_FAIL:
      return { error: action.payload }
    default:
      return {}
  }
}
