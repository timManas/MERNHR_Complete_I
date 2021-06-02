import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  listProductReducer,
  singleProductReducer,
} from './reducers/productReducers'

import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducers = combineReducers({
  listProducts: listProductReducer,
  singleProduct: singleProductReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
