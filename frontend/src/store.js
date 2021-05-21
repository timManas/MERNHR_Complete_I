import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  listProductReducer,
  singleProductReducer,
} from './reducers/productReducers'

import { userLoginReducer } from './reducers/userReducers'

const reducers = combineReducers({
  listProducts: listProductReducer,
  singleProduct: singleProductReducer,
  userLogin: userLoginReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
