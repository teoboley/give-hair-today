import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import CssBaseline from 'material-ui/CssBaseline';

import './app.css'

const App = () => (
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <script src="conic-gradient.js"></script>
    <Router>
      <div>
        <CssBaseline />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </div>
)

export default hot(module)(App)
