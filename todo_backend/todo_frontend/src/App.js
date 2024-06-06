// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          {loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
        </Route>
      </div>
    </Router>
  );
};

export default App;
