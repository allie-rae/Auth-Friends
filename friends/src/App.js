import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Switch>
          <Route path="login" component={Login} />
          <Route component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
