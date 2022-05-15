
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons'
import {faPaste} from '@fortawesome/free-regular-svg-icons'
import {Link} from 'react-router-dom'
const Sidebar = () =>{
    return(
        <div className="w-36 h-screen px-1 bg-Skylight sticky">
            <div className="flex flex-col items-center ">
                <div className="flex mt-5">
                     <FontAwesomeIcon className='mr-2' icon={faBell} />
                     <h1>Sidebar</h1>
                </div>
                 <div className="flex mt-5">
                    <FontAwesomeIcon className='mr-2' icon={faPaste} /> 
                     <h1>Total Stock</h1>
                </div>
                 <div className="flex mt-5">
                    <FontAwesomeIcon className='mr-2' icon={faPlusSquare} /> 
                     <Link to="/addstock"><h1>Add Stock</h1></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar