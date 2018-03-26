import React from 'react'
import Lottie from 'react-lottie';
import { withSiteData } from 'react-static'
import Button from 'material-ui/Button';

import PagedForm from "../components/PagedForm";

import * as animationData from '../hair-animation.json';
import "./Home.css";
import "./About.css";

const withLoader = (app) => {
  /* <Lottie
      options={{
        loop: true,
        autoplay: true, 
        animationData: animationData
      }}
      height={800}
      width={800}
      /> */
};

export default withSiteData(() => (
  <div className="Home">
    <section>
      <div>
        <h1>Give Hair Today</h1>
        <p>Use one of our new, miraculous products to simulataneously achieve a self-updating look and give to your favorite charity.</p>
        <Button variant="raised" color="primary">
          Call to Action
      </Button>
      </div>
      <img src="http://via.placeholder.com/400x500" width={400} height={500}/>
    </section>
    <section>
      <PagedForm />
    </section>
    <section>
      <div>
        <h1>About Us</h1>
        <div className="about-container">
          <div className="derma">
            <h2>Developed With Dermatologists</h2>
            <p>
              In 2016, L’Oreals Labs developed a line of haircare products enriched
              with a blend of vitamins, fatty acids, and other lipids to help repair
              and strengthen hair. The ratios of lipids to vitamins defines Give
              Hair’s key capacity of naturally causing hair loss in a certain time
              period. Each Haircare product is tailored for our customers with a
              perfected formula for their ideal hair!
            </p>
          </div>
          <div className="born">
            <h2>Give Hair is Born</h2>
            <div className="block-wrap">
              <blockquote>
                We find animal testing to be an abhorrent practice. So we didn't.
              </blockquote>
              <img
                src="https://res.cloudinary.com/dknopoff/image/upload/c_scale,h_104/v1521600205/lorealethics.png"
                alt="L'Oreal Ethics"
              />
            </div>
            <p>
              L'Oreal is dedicated to the world standard in excellence of beauty
              products and ethical testing. Give Hair Today is an initiative to
              promote the strength of women through beauty.
            </p>
          </div>
          <div className="tech">
            <h2>L’Oreal Technology</h2>
            <p>
              A revolutionary delivery system was developed which releases
              moisturizing ingredients over the course of 24 hours, layer by layer,
              to help your hair grow strong and healthy all day long.
            </p>
          </div>
        </div>
        <h1>100% Satisfaction Guaranteed!</h1>
      </div>
    </section>
  </div>
))
