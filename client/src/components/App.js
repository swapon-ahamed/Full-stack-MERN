import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="container mt-5" >
        <div className="card">
          <div className="card-body">
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" component={Dashboard} />

            </Switch>
          </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
