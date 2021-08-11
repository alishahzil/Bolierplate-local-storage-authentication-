
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import TestAlert from './component/layout/TestAlert';
import Alert from './component/layout/Alert';


function App() {
  return (
    <Provider  store={store}>
      <div className="App">
        <Alert/>
      <h1> this is MERN boiler plate</h1>
      <TestAlert/>
      </div>
       {/* <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router> */}
    </Provider>
  );
}

export default App;
