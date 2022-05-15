import React from 'react'
import {logout} from '../../actions/login'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'




function Navbar() {
    const dispatch = useDispatch()
    const log = () =>{
       dispatch(logout())
    }
    const login = useSelector(state => state.login.login)
    
 

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-gray-600 ">
                        <Link className="navbar-brand text-white font-medium" to="/">Pharmax</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            {login ?
                            <li className="nav-item active ">
                                <Link className="nav-link text-white font-medium" to="/login" >Dashboard <span className="sr-only">(current)</span></Link>
                            </li>  : 
                             <li className="nav-item active ">
                                <Link className="nav-link text-white font-medium" to="/login" >Login <span className="sr-only">(current)</span></Link>
                            </li>}
                           </ul>
                        </div>
                        <button class="btn btn-danger" onClick={log} >Logout</button>
                </nav>
        </div>
    )
}



export default Navbar
