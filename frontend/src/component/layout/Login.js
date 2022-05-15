import React ,{useState} from 'react'
import { useHistory } from "react-router-dom";
import { setAlert } from '../../actions/alert'
import {login} from '../../actions/login'
import {useDispatch} from 'react-redux'

function Login() {
    const dispatch = useDispatch()
     const  [signup, setsignup] = useState({
         email:'',
         password:''
     })
    const history = useHistory();
    const register = (e) =>{
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(signup.email !=null  && signup.password != null){
            if(signup.email.match(regexEmail) ){ 
               console.log(signup)
               dispatch(login(signup,'login'))
            }else{
               dispatch(setAlert("please enter the right email","info"))
            }
        }else{
         dispatch(setAlert("Please Enter your credentials","info")) 
        }
        
    }
    const sendsingup = () =>{
     history.push("/signup");
    }
    return (
        <div className="main">
                    <div className="main-div d-flex flex-wrap row">
                <div className="col-md-7 left-signup">
                <h2>One Place to manage Pharmax</h2>
                <h2>Anytime, Anywhere</h2>
                <button style={{marginBottom:'10px'}} onClick={sendsingup}>Sign up</button>
                </div>
                <div className="col-md-5 right-signup text-center" style={{backgroundColor: 'white'}}>
                <div className='mt-14'>
                    <img />
                    <h2>Pharmax</h2>
                </div>
                <h2>Login to your account</h2>
                <div className="signup">
                    <div className="inputContainer d-flex aligns-items-center">
                    <i className="fas fa-paper-plane icon"> </i>
                    <input type="email" key="email" name="email" onChange={({target}) =>setsignup(state =>({...state,email:target.value})) } value={signup.email} className="form-control Field" placeholder="Email" /> 
                    </div>
                    <div className="inputContainer d-flex aligns-items-center">
                    <i className="fas fa-lock icon"> </i>
                    <input  type="password" key="password" name="password" onChange={({target}) =>setsignup(state =>({...state,password:target.value})) } value={signup.password} className="form-control Field" placeholder="Password" /> 
                    </div>
                </div>
                <p>By signing up you confirm that your've agree with our User's policy and Privacy policy</p>
                <button className="btn btn-primary" onClick={register} style={{width: '100%'}}>login</button>
                <p>-------------------OR------------------</p>
                <button className="btn " style={{width: '100%'}}>already have an account</button>
                </div>
            </div>
      </div>    
    )
}


export default Login
