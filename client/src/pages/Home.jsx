import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Components
 */
import {ParallaxFooter} from '../components/Footer';
import {Info, Navigation} from '../components/Displays';

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
        <Navigation display = "parallax-small" />
      </div>
      <div className = "parallax-layer parallax-back"></div>
      <div className = "parallax-layer parallax-deep"></div>
    </div>
    <div className = "parallax-group" id="home4">
      <div className = "parallax-layer parallax-fore">
        <Info display = "parallax-large" title = "Contact Information"/>
      </div>
      <div className = "parallax-layer parallax-base"></div>
    </div>
    <ParallaxFooter />
  </div>
);

export default Home;
