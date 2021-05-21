import React from 'react'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'

export const userLoginReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return state
    case USER_LOGIN_SUCCESS:
      return { data: action.payload }
    case USER_LOGIN_FAIL:
      return { error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
