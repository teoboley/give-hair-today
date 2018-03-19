import React from 'react'
import Lottie from 'react-lottie';
import { withSiteData } from 'react-static'
import * as animationData from '../hair-animation.json';

export default withSiteData(() => (
  <div>
    <Lottie options={{
      loop: true,
      autoplay: true, 
      animationData: animationData
    }}
      height={800}
      width={800}
      />
  </div>
))
