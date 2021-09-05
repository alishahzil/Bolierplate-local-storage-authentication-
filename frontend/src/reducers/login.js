import {LOGIN,LOGOUT} from '../constant/alerts'

const initialState = {login:false}


function loginReducers(state=initialState,action){
    const {type} = action
    switch(type){
        case LOGIN:
            return {login:true}
        case LOGOUT:
            return {login:false}
        default:
            return state
    }
}

export default loginReducers