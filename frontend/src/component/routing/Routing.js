import { Route, Switch,Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux'
import React from 'react'
import Login from '../layout/Login';
import Signup from '../layout/Signup';
import InvoiceTable from '../layout/AddStock/Invoice/InputTable/Invoice/InvoiceTable';

function Routing() {
    const  checklogin = useSelector(state => state.login.login)
    
    return (
        <Switch>
             <Route exact path="/login" >
                 {checklogin ? <Redirect to="/" /> : <Login/>}
             </Route>
              <Route exact path="/addstock" >
                 {checklogin ? <Redirect to="/" /> : <InvoiceTable/>}
             </Route>
             <Route exact path="/signup">
                  {checklogin ? <Redirect to="/" /> : <Signup/>}
             </Route>
           
      </Switch>
    )
}

export default Routing
