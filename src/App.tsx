import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import CssBaseline from 'material-ui/CssBaseline';

import './app.css'


const App = () => (
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <div>
      <Router>
        <div>
          <CssBaseline />
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    </div>
  </div>
);

export default hot(module)(App)
