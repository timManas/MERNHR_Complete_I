import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { listProductReducer } from './reducers/productReducers'

const reducers = combineReducers({
  listProducts: listProductReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
