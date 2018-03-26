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
      <svg viewBox="0 0 568 328" version="1.1">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" transform="translate(-62.000000, -132.000000)" fill="rgba(255,255,255,0.025)">
                  <polygon id="Rectangle-Copy" transform="translate(346.000000, 296.000000) scale(-1, -1) translate(-346.000000, -296.000000) " points="630 132 630 460 62 460"></polygon>
              </g>
          </g>
      </svg>
      <div>
        <div className="title">
          <span className="presents"><span className="loreal">L'OREAL Lab</span> Presents</span>
          <h1>Give Hair Today</h1>
        </div>
        <p>Use one of our new, miraculous products to simulataneously achieve a self-updating look and give to your favorite charity.</p>
        <br/>
        <Button variant="raised" color="primary">
          <a href="#enroll">Enroll Today</a>
        </Button>
        <Button variant="raised" color="secondary">
            Watch The Film
        </Button>
      </div>
      
      <img src="/bottle.png" width={400} height={500}/>
      <svg viewBox="0 0 568 328" version="1.1">
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" transform="translate(-62.000000, -132.000000)" fill="rgba(255,255,255,0.1)">
                  <polygon id="Rectangle" points="630 132 630 460 62 460"></polygon>
              </g>
          </g>
      </svg>
    </section>
    <a name="enroll" />
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
        <h2>100% Satisfaction Guaranteed!</h2>
      </div>
    </section>
  </div>
))
