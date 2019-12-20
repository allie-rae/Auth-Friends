import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friendslist from './components/Friendslist';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/login" className="navLink">Login</Link>
          <Link to="/friendslist" className="navLink">Friends List</Link>
        </nav>
        <Switch>
          <PrivateRoute path="/friendslist" component={Friendslist} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
