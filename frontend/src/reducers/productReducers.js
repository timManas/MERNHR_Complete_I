import React from 'react'
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_SINGLE_FAIL,
  PRODUCT_SINGLE_REQUEST,
  PRODUCT_SINGLE_SUCCESS,
} from '../constants/productConstants'

export const listProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      console.log(PRODUCT_LIST_REQUEST + ' CALLED')
      return state
    case PRODUCT_LIST_SUCCESS:
      console.log(PRODUCT_LIST_SUCCESS + ' CALLED')
      return { products: action.payload }
    case PRODUCT_LIST_FAIL:
      console.log(PRODUCT_LIST_FAIL + ' CALLED')
      return { error: action.payload }
    default:
      console.log('DEFAULT CALLED')
      return state
  }
}

export const singleProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_SINGLE_REQUEST:
      return { product: {} }
    case PRODUCT_SINGLE_SUCCESS:
      return { product: action.payload }
    case PRODUCT_SINGLE_FAIL:
      return { error: action.payload }
    default:
      return state
  }
}
