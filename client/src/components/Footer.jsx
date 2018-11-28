import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div className = "footer">
    <p>Peter Pak 2018</p>
    <div>
      <span>
        Icons borrowed from&nbsp;
        <FontAwesomeIcon icon = {['fab', 'font-awesome-flag']} />
        &nbsp;Font Awesome
      </span>
    </div>
  </div>
);

const ParallaxFooter = () => (
  <div className = "parallax-group" id = "parallax-footer">
    <div className = "parallax-layer parallax-base">
      <Footer />
    </div>
  </div>
);

export {Footer, ParallaxFooter};
