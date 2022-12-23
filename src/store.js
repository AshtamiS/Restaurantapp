import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restaurantlistReducer } from './reducers/restaurantReducer'
// to generate middle ware

const reducers=combineReducers({//2
restaurantReducer:restaurantlistReducer
})
const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))//1

export default store