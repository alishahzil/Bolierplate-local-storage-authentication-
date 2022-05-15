

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faNoteSticky} from '@fortawesome/free-regular-svg-icons'


const Topbaritem = () =>{
    return(
        <div className="flex justify-around -mt-12">
        <div className="w-56 rounded-xl overflow-hidden shadow-md pt-12 pb-2 bg-gradient-to-b from-Cyan to-transparent font-bold">
            <div className="flex-col justify-start pl-3">
                  <FontAwesomeIcon icon={faCalendar} />
                  <h1>Today Appointment</h1>
                  <h1>12/24</h1>
                  <div style={{marginLeft:'40%'}}>10%</div>   
                  <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2 mr-2">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{width:'45%'}}></div>
                 </div>
            </div>

        </div>
         <div className="w-56 rounded-xl overflow-hidden shadow-md pt-12 pb-2 bg-gradient-to-b from-violet to-transparent text-white">
            <div className="flex-col justify-start pl-3">
                 <FontAwesomeIcon icon={faBookmark} />
                  <h1>Today Appointment</h1>
                  <h1>12/24</h1>
                  <div style={{marginLeft:'40%'}}>10%</div>   
                  <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2 mr-2">
                      <div className="bg-Orange h-2.5 rounded-full" style={{width:'45%'}}></div>
                 </div>
            </div>

        </div>
         <div className="w-56 rounded-xl overflow-hidden shadow-md pt-12 pb-2 bg-gradient-to-b from-Orange to-transparent text-white">
            <div className="flex-col justify-start pl-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h1>Today Appointment</h1>
                  <h1>12/24</h1>
                  <div style={{marginLeft:'40%'}}>10%</div>   
                  <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2 mr-2">
                      <div className="bg-Cyan h-2.5 rounded-full" style={{width:'45%'}}></div>
                 </div>
            </div>

        </div>
         <div className="w-56 rounded-xl overflow-hidden shadow-md pt-12 pb-2 bg-gradient-to-b from-Rose to-transparent text-white">
            <div className="flex-col justify-start pl-3">
                  <FontAwesomeIcon icon={faNoteSticky} />
                  <h1>Today Appointment</h1>
                  <h1>12/24</h1>
                  <div style={{marginLeft:'40%'}}>10%</div>   
                  <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2 mr-2">
                      <div className="bg-violet h-2.5 rounded-full" style={{width:'45%'}}></div>
                 </div>
            </div>

        </div>
        </div>
    )
}

export default Topbaritem