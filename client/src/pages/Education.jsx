import React from 'react';

const Education = () => (
  <div className = "page-wrapper">
    <h1 className = "page-header">Education</h1>
    <div className = "parallax-bg" id = "campus"></div>
    <div className = "icons">
      <img className = "department-icon" src = "public/images/cmu.jpg"/>
      <img className = "department-icon" src = "public/images/mse.png"/>
      <img className = "department-icon" src = "public/images/bme.png"/>
    </div>
    <div className = "parallax-bg" id = "graduation"></div>
  </div>
);

export default Education;
