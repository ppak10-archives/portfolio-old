import React from 'react';

/**
 * Components
 */
import {Footer} from '../components/Footer';

const Education = () => (
  <div className = "page-wrapper">
    <h1 className = "page-header">Education</h1>
    <div className = "parallax-simple" id = "campus"></div>
    <div className = "icons">
      <img className = "department-icon" src = "public/images/cmu.jpg"/>
      <img className = "department-icon" src = "public/images/mse.png"/>
      <img className = "department-icon" src = "public/images/bme.png"/>
    </div>
    <div className = "parallax-simple" id = "graduation"></div>
    <Footer />
  </div>
);

export default Education;
