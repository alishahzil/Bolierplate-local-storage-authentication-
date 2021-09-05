import {combineReducers} from 'redux'
import alert from './alert'
import login  from './login'
import user from './user'

export default combineReducers({
    alert,
    login,
    user
})

