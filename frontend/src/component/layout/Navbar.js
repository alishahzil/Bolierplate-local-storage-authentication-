import React from 'react'
import {logout} from '../../actions/login'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'




function Navbar() {
    const dispatch = useDispatch()
    const log = () =>{
       dispatch(logout())
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Disabled</Link>
                            </li>
                            </ul>
                        </div>
                        <button class="btn btn-danger" onClick={log} >Logout</button>
                </nav>
        </div>
    )
}



export default Navbar
