import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'
import axios from 'axios'

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${}`
      },
    }

    console.log('config: ' + JSON.stringify(config))

    const body = {
      email,
      password,
    }

    console.log('body: ' + JSON.stringify(body))

    const { data } = await axios.post('/api/users/login', body, config)
    console.log('User Data: ' + JSON.stringify(data))

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}