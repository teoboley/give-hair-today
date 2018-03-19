import React from 'react'
import Lottie from 'react-lottie';
import { withSiteData } from 'react-static'

import PagedForm from "../components/PagedForm";

import * as animationData from '../hair-animation.json';

export default withSiteData(() => (
  <div>
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
        <h1>Mo' Hair, Mo' Problems</h1>
        <button>Call to Action</button>
      </section>
      <section>
        <Lottie
          options={{
            loop: true,
            autoplay: true, 
            animationData: animationData
          }}
          height={200}
          width={200}
        />
        <PagedForm currentPage={0}>
            <div>
              <h2>Page 1</h2>
            </div>
            <div>
              <h2>Page 2</h2>
            </div>
            <div>
              <h2>Page 3</h2>
            </div>
        </PagedForm>
      </section>
  </div>
))
