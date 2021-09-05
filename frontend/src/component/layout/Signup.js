import React,{useState} from 'react'
import { useHistory } from "react-router-dom"
import { setAlert } from '../../actions/alert'
import {useDispatch} from 'react-redux'
import {signUp} from '../../actions/login'


function Signup() {
  const dispatch = useDispatch()
    const  [signup, setsignup] = useState({
      email:'',
      name:'',
      password:''
    })

    const history = useHistory();
    const register = (e) =>{
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(signup.email !=null && signup.name != null && signup.password != null){
            if(signup.email.match(regexEmail) ){ 
               console.log(signup)
               dispatch(signUp(signup))
            }else{
               
                 dispatch( setAlert("please enter the right email","info"))
            }
        }else{
         dispatch(setAlert("Please Enter your credentials","info")) 
        }
        
    }
    const sendsignin = () =>{
     history.push("/login");
    }
    return (
        <div className="main">
               <div className="main-div d-flex flex-wrap row">
        <div className="col-md-7 left-signup">
          <h2>Find the Right Frequency</h2>
          <h2>Anytime, Anywhere</h2>
          <button style={{marginBottom:'10px'}} onClick={sendsignin}>Login</button>
        </div>
        <div className="col-md-5 right-signup text-center" style={{backgroundColor: 'white'}}>
          <div>
            <img />
            <h2>Soundon</h2>
          </div>
          <h2>Sign up to your account</h2>
          <div className="signup">
            <div className="inputContainer d-flex aligns-items-center">
              <i className="fas fa-paper-plane icon"> </i>
              <input type="email" key="email" name="email" onChange={({target}) =>setsignup(state =>({...state,email:target.value})) } value={signup.email} className="form-control Field" placeholder="Email" /> 
            </div>
            <div className="inputContainer d-flex aligns-items-center">
              <i className="far fa-user icon"> </i>
              <input type="text" key="name" name="name" className="form-control Field" placeholder="Name" onChange={({target}) =>setsignup(state =>({...state,name:target.value})) } value={signup.name} /> 
            </div>
            <div className="inputContainer d-flex aligns-items-center">
              <i className="fas fa-lock icon"> </i>
              <input type="password" key="password" name="password" onChange={({target}) =>setsignup(state =>({...state,password:target.value})) } value={signup.password} className="form-control Field" placeholder="Password" /> 
            </div>
          </div>
          <p>By signing up you confirm that your've agree with our User's policy and Privacy policy</p>
          <button className="btn btn-primary" style={{width: '100%'}} onClick={register}>Register</button>
          <p>-------------------OR------------------</p>
          <button className="btn " style={{width: '100%'}}>Continue with google</button>
          <button className="btn " style={{width: '100%'}}>already have an account</button>
        </div>
      </div>
        </div>
    )
}


export default Signup
