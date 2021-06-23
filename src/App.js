import { useEffect } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Logout from './components/Logout';
import Menu from './components/Menu';
import Signin from './components/Signin';
import Signup from './components/Signup';
import store from './Redux/store';


function App() {

  
  return (
    <>
    <Provider store={store}>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
      </Provider>
    </>
  );
}

export default App;
