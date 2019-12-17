import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//components
import FriendsList from './components/FriendsList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
