import React, {Component} from 'react';

/**
 * Components
 */
import {LoginFooter, Footer} from '../components/Footer';

/**
 * Projects Page
 */
export default class Projects extends Component {
  /**
   * Projects Component Render
   * @return { Component }
   */
  render() {
    return (
      <div className = "page-wrapper">
        <h1 className = "page-header">Projects</h1>
        <LoginFooter />
      </div>
    );
  }
}
