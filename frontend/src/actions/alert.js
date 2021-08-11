import {v4 as  uuid4} from 'uuid'
import {SET_ALERT,REMOVE_ALERT} from '../constant/alerts'

export const setAlert = (msg,alertType,timeout=3000) => dispatch =>{
    const id = uuid4()
    console.log('set Alert is also called')
    dispatch({
        type:SET_ALERT,
        payload:{msg,alertType,id}
    })
    setTimeout(() => dispatch({type:REMOVE_ALERT,payload:id}), timeout)
}
export const removeAlert = (id) => dispatch =>{
    dispatch({
        type:REMOVE_ALERT,
        payload:id
    })
}
