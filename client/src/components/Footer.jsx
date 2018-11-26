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

export default Footer;
