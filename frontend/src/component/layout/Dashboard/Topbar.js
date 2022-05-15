
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import{useSelector} from 'react-redux'
import {React,useState} from 'react'
import moment from "moment"

const Topbar = ()=>{
    const [time,setTime] = useState(moment().format('h:mm:ss a'))
    setTimeout(() => {
        setTime(moment().format('h:mm:ss a'))
    }, 1000);
     const user = useSelector(state => state.user)
     
    return(
        <div className="flex flex-col items-center w-full justify-between md:flex-row">
            <div>
                <h1 className="font-bold text-white mt-1" >Good Morning, {user.name} </h1>
                <h2 className="text-white mt-1" >Check out the updates inside Pharmax software, Have a nice day</h2>
            </div>
            <div className="flex text-white mt-2">
                <div className="mr-2">
                    <h1>Today,{moment().format("DD-MM-YYYY")}</h1>
                </div>
               <div className="mr-2">
                   <h1>Time {time}</h1>
               </div>
                <FontAwesomeIcon icon={faBell} />
               <div>
               </div>
            </div>
        </div>
    )
}

export default Topbar