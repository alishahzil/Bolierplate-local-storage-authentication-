import {GETME,GETLOGOUT} from '../constant/alerts'

const initialState = {}


function userReducer(state=initialState,action){
    const {type,data} = action
    switch(type){
        case GETME:
            return data
        case GETLOGOUT:
            return {}
        default:
            return state
    }
}

export default userReducer