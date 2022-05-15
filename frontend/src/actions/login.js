import axios from 'axios'
import {setAlert} from './alert'
import {LOGIN,LOGOUT,LINK,GETME,GETLOGOUT} from '../constant/alerts'
const ls = require('local-storage');

export const login =  (data) => async (dispatch) =>{
     const config = {
         headers:{
             'Content-Type':'application/json'
         },
    
     }
   await axios.post(`${LINK}/api/user/login`,data,config).then(res =>{
      if(res.data.success === false){
         dispatch(setAlert(res.data.error,'danger'))
      }else{
          ls('token',res.data.token)
          console.log(res)
          dispatch({
            type:LOGIN
          })
      }
   }).catch(err=>{
      console.log(err)
      dispatch(setAlert('Fail to login','danger'))
   })

  
}
export const signUp =  (data) => async (dispatch) =>{
     const config = {
         headers:{
             'Content-Type':'application/json'
         },
    
     }
   await axios.post(`${LINK}/api/user/register`,data,config).then(res =>{
      if(res.data.success === false){
         dispatch(setAlert(res.data.error,'danger'))
      }else{
          ls('token',res.data.token)
          console.log(res)
          dispatch({
            type:LOGIN
          })
      }
   }).catch(err=>{
      console.log(err)
      dispatch(setAlert('Fail to Create account','danger'))
   })

  
}

export const getMe =  () => async (dispatch) =>{
     console.log('im here')
     const token = ls.get('token')
     const config = {
         headers:{
             'Content-Type':'application/json',
             'Authorization': `Bearer ${token}`
         },
     }
   await axios.get(`${LINK}/api/user/me`,config).then(res =>{
      if(res.data.success === false){
         dispatch(setAlert(res.data.error,'danger'))
      }else{
          console.log(res)
          dispatch({
            type:GETME,
            data:res.data.data
          })
      }
   }).catch(err=>{
      console.log(err)
      dispatch(setAlert('User not login','danger'))
   })

  
}
export const logout = () =>async(dispatch) =>{
  try {
    ls.remove('token')
     dispatch({
            type:LOGOUT
     })
     dispatch({type:GETLOGOUT})
  } catch (err) {
    console.log(err.response.data)
  }
 
}
