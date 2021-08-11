import React from 'react'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types';

function TestAlert({setAlert}) {
    const callalert = (e) =>{
        console.log('alert is called')
        e.preventDefault()
        setAlert("alert is working properly", "info")
    }
    return (
        <div>
            <button onClick={callalert}>Test ALert</button>
        </div>
    )
}
TestAlert.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect( null,{setAlert})(TestAlert)
