import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  listProductReducer,
  singleProductReducer,
} from './reducers/productReducers'

import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const reducers = combineReducers({
  listProducts: listProductReducer,
  singleProduct: singleProductReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
})

const middleware = [thunk]

// Fetch items from localStore if ANY
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
