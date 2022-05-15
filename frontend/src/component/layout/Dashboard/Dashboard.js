import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Topbaritem from './Topbaritem'
import Medicine_outstock from './Medicine_outstock'
import Medicine_sale from './Medicine_sale'


const Dashboard = () =>{
    return(
        <div className='flex'>
         <Sidebar />
         <div className='w-full h-auto'>
              <div className='bg-Sky pt-10 pb-20  pl-20 pr-20'>
               <Topbar/>
              </div>
            <Topbaritem/>
            <div className='flex pl-10 pr-10 mt-10'>
                <div className='w-full md:w-4/6' >
                  <Medicine_outstock/>
                </div>
                <div className ='w-1/2 ml-5' >
                    <Medicine_sale/>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Dashboard