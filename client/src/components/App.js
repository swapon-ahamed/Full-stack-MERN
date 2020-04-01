import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

function App() {
  return (
    <BrowserRouter>
    <div className="container mt-5" >
        <div className="card text-center">
          <div className="card-body">
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
