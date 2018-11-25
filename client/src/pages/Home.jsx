import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Components
 */
import ParallaxFooter from '../components/ParallaxFooter';

const Home = () => (
  <div className = "parallax">
    <div className = "parallax-group" id="home1">
      <div className = "parallax-layer parallax-base">
        <div className = "title">
          <span>Peter Pak</span>
          <div>
            <a href = "#home2">
              <button className="button-lg">
                <FontAwesomeIcon
                  className = "button-icon"
                  icon = "user-circle" />
                <span className = "button-text">Biography</span>
              </button>
            </a>
            <a href = "#home4">
              <button className="button-lg">
                <FontAwesomeIcon
                  className = "button-icon"
                  icon = "address-card" />
                <span className = "button-text">Contact Information</span>
              </button>
            </a>
            <button className="button-lg">
              <FontAwesomeIcon className = "button-icon" icon = "download" />
              <span className = "button-text">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
      <div className = "parallax-layer parallax-back"></div>
    </div>
    <div className = "parallax-group" id="home2">
      <div className = "parallax-layer parallax-base"></div>
    </div>
    <div className = "parallax-group" id="home3">
      <div className = "parallax-layer parallax-base">
        <div className = "title">Base Layer</div>
      </div>
      <div className = "parallax-layer parallax-back"></div>
      <div className = "parallax-layer parallax-deep"></div>
    </div>
    <div className = "parallax-group" id="home4">
      <div className = "parallax-layer parallax-base">
        <div className = "title">Base Layer</div>
      </div>
    </div>
    <ParallaxFooter />
    {/* <div>
      <h1>Peter Pak</h1>
      <div>
        <button className="btn">Biography</button>
        <button className="btn">Contact Information</button>
        <button>Download Resume</button>
      </div>
    </div> */}
  </div>
);

export default Home;
