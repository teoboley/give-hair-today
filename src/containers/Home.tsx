import React from 'react'
import { withSiteData } from 'react-static'
import Lottie from "react-lottie";
import Button from 'material-ui/Button';
import Modal from 'react-modal';
import CloseIcon from 'material-ui-icons/Close';

import PagedForm from "../components/PagedForm";

import "./Home.css";
import "./About.css";

type State = {
  showModal: boolean;
  loading: boolean;
}

import * as animationData from '../hair-animation.json';


class Loader extends React.Component<any, {}>{
  componentDidMount() {
    (this.refs.lottie as any).forceUpdate();
  }

  render() {
    const { loading, onComplete } = this.props;

    return (
      <div className={`loader ${loading ? "visible" : "hidden"}`}>
      <div style={{ visibility: loading ? "visible" : "hidden" }}>
      <Lottie
        ref="lottie"
        options={{
          autoplay: true,
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
                onComplete();
              },
            },
          ]
        }
      />
      </div></div>);
  }
}


export default withSiteData(
  class Home extends React.Component<any, State> {
    constructor (props: any) {
      super(props);
      this.state = {
        showModal: false,
        loading: true
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render() {
      return (
        <div className="Home">
          { Loader != null && (window.location.href.indexOf("#") == -1) && <Loader loading={this.state.loading} onComplete={() => this.setState({ loading: false })}/> }
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            style={{
              content: {
                zIndex: 5, 
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                background: "none",
                border: "none",
                display: 'flex',
              },
              overlay: {
                zIndex: 4,
                background: "rgba(0, 0, 0, 0.75)",
              }
            }}
          >
            <iframe src="https://drive.google.com/file/d/1lhFFoHqQvzTQmyPeI-jpEyfVGEHMV14M/preview?auto-play=true" width="640" height="480"></iframe>
            <Button variant="fab" color="secondary" style={{ margin: 10 }} onClick={this.handleCloseModal}><CloseIcon /></Button>
          </Modal>
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
                <h1 style={{ color: "white" }}>Give Hair Today</h1>
              </div>
              <p>Use one of our new, miraculous products to simulataneously achieve a self-updating look <span style={{ fontWeight: "bold" }}>and</span> give to your favorite charity*</p>
              <br />
              <Button variant="raised" color="primary">
                <a href="#enroll">Enroll Today</a>
              </Button>
              <Button variant="raised" color="secondary" onClick={this.handleOpenModal}>
                Watch The Film
              </Button>
              <br />
              <div className="disclaimer">
                <p>*Products sold by L'OREAL Lab do not contribute proceeds to charity, your returned hair is utilized as donated material.</p>
              </div>
            </div>
      
            <div style={{ width: 500, height: 500 }} />
      
            <svg viewBox="0 0 568 328" version="1.1">
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-62.000000, -132.000000)" fill="rgba(255,255,255,0.1)">
                  <polygon id="Rectangle" points="630 132 630 460 62 460"></polygon>
                </g>
              </g>
            </svg>
          </section>
          <div className="bottle"><img src="/bottle.png" width={400} height={500} /></div>
          <a name="enroll" />
          <section>
            <div>
              <h1 style={{ textAlign: "right" }} >Be a style pioneer, enroll now!</h1>
              <div style={{ display: "flex" }}>
                <img src="/fullview.png" width={400} height={500} />
                <PagedForm style={{ marginLeft: 20 }} />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h1>About Us</h1>
              <div className="about-container">
                <div className="derma">
                  <h2>Developed With Dermatologists</h2>
                  <p>
                    In 2016, L’Oreal Lab developed a line of haircare products enriched
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
              <img src="/cruelty.png" width={300} height={300}/>
            </div>
          </section>
        </div>
      );
    }
  });
