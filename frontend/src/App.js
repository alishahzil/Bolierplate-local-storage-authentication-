
import './App.css';
import React,{Fragment} from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import Navbar from './component/layout/Navbar';
import Alert from './component/layout/Alert';
import Landing from './component/layout/Landing';
import Routing from './component/routing/Routing';


function App() {
  return (
    <Provider  store={store}>
       <Router>
        <Fragment>
           <Alert/>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
