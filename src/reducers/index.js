import { combineReducers } from 'redux'

//In  order to combine I need all the reducers
import productsReducer from './productsReducer'
import userReducer from './userReducer'

var combinedReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

export default combinedReducers
