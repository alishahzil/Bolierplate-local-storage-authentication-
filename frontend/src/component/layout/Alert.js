import React from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux'
import {removeAlert} from '../../actions/alert'
import { ImCross } from 'react-icons/im';


const Alert =({alerts,removeAlert}) =>
 <div className="center">
     
  {alerts.map((alert)=>(
      <div key={alert.id} className={`alert alert-${alert.alertType} alert`} role="alert">
           <div className='font-bold' >{alert.msg}</div> 
           <div><ImCross key={alert.id} id={alert.id} onClick={(e)=>{removeAlert(e.currentTarget.id)}} /></div> 
      </div>
  ))}
  </div>

Alert.propTypes ={
    alerts:propTypes.array.isRequired,
    removeAlert:propTypes.func.isRequired
}
const mapStateToProps = (state) =>({
    alerts: state.alert
})

export default connect(mapStateToProps,{removeAlert})(Alert)
 

