import React,{useEffect} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {getMe} from '../../actions/login'

function Landing() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const login = useSelector(state =>state.login.login)
    useEffect(()=>{
        if(login){
            dispatch(getMe())
        }
    },[])

    return (
        <div>
             <h1> this is MERN boiler plate</h1>
             {login ? <h1>Name: {user.name}</h1> : <h1>Name:</h1>}
        </div>
    )
}

export default Landing
