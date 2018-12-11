/**
 * Footer.jsx
 * Different footer components for specific page layouts
 */

/**
 * Node Modules
 */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Simple Footer Component
 */

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

/**
 * Parallax Footer Component Wrapper
 */

const ParallaxFooter = () => (
  <div className = "parallax-group" id = "parallax-footer">
    <div className = "parallax-layer parallax-base">
      <Footer />
    </div>
  </div>
);

/**
 * Hidden Login Footer Component
 * No longer used and impractical since password managers reveal input fields
 */

const LoginFooter = () => (
  <form className = "footer-login">
    <div className = "footer-input">
      {/* un and ps to prevent notifying password managers */}
      <input id = "un" type = "text" name = "un" placeholder = "Peter Pak"/>
      <input id = "ps" type = "text" name = "pw" placeholder = " 2018"/>
    </div>
    <div>
      <span>
        Icons borrowed from&nbsp;
        <NavLink to = "/register">
          <FontAwesomeIcon icon = {['fab', 'font-awesome-flag']} />
        </NavLink>
        &nbsp;Font Awesome
      </span>
    </div>
  </form>
)

export {Footer, ParallaxFooter, LoginFooter};
