import {R_SUCCESS,R_FAILURES} from '../constants/restaurantConstants'

export const restaurantlistReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{
                restaurantList:action.payload
            }
            case R_FAILURES:
                return{
                    restaurantList:action.error
                }
            default:
                return state
    }
}