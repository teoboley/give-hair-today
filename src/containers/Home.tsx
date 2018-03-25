import React from 'react'
import Lottie from 'react-lottie';
import { withSiteData } from 'react-static'
import Button from 'material-ui/Button';

import PagedForm from "../components/PagedForm";

import * as animationData from '../hair-animation.json';
import "./Home.css";

export default withSiteData(() => (
  <div className="Home" style={{  }}>
    {/* <Lottie
      options={{
        loop: true,
        autoplay: true, 
        animationData: animationData
      }}
      height={800}
      width={800}
      /> */}
      <section>
        <div>
          <h1>Give Hair Today</h1>
          <p>Use one of our new, miraculous products to simulataneously achieve a self-updating look and give to your favorite charity.</p>
          <Button variant="raised" color="primary">
        Call to Action
      </Button>
        </div>
        <img src="http://via.placeholder.com/350x500"/>
      </section>
      <section>
        <PagedForm />
      </section>
  </div>
))
