import React from 'react';

/**
 * Components
 */
import ParallaxFooter from '../components/ParallaxFooter';

const Research = () => (
  <div className = "parallax">
    <div className = "parallax-group" id="research1">
      <div className = "parallax-layer parallax-base">
        <div className = "title">Base Layer</div>
      </div>
      <div className = "parallax-layer parallax-back"></div>
    </div>
    <div className = "parallax-group" id="group3">
      <div className = "parallax-layer parallax-fore">
        <div className = "title">Foreground Layer</div>
      </div>
      <div className = "parallax-layer parallax-base">
        <div className = "title">Base Layer</div>
      </div>
    </div>
    <div className = "parallax-group" id="group4">
      <div className = "parallax-layer parallax-base">
        <div className = "title">Base Layer</div>
      </div>
      <div className = "parallax-layer parallax-back">
        <div className = "title">Background Layer</div>
      </div>
      <div className = "parallax-layer parallax-deep">
        <div className = "title">Deep Background Layer</div>
      </div>
    </div>
    <div className = "parallax-group" id="group1">
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

export default Research;
