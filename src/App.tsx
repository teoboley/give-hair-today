import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import CssBaseline from 'material-ui/CssBaseline';

import './app.css'

import * as animationData from './hair-animation.json';

type State = {
  loading: boolean;
}

let Lottie: any;

if (typeof document !== 'undefined') {
  Lottie = require('react-lottie').default;
}

 
class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    (this.refs.lottie as any).forceUpdate();
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          { Lottie != null && 
          <div className="loader" style={ this.state.loading ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}>
            <div style={{ visibility: this.state.loading ? "visible" : "hidden" }}>
            <Lottie
              ref="lottie"
              options={{
                autoplay: this.state.loading,
                animationData: animationData
              }}
              
              height={800}
              width={800}
              speed={1.75}
              eventListeners={
                [
                  {
                    eventName: 'loopComplete',
                    callback: () => {
                      console.log("COMPLETE")
                      this.setState({ loading: false })
                    },
                  },
                ]
              }
            />
            </div>
          </div>
          }
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
  }
}

export default hot(module)(App)
