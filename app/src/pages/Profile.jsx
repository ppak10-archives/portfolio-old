/**
 * Profile.jsx
 * Profile page for user who is logged in
 */

// Node Modules
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "page-wrapper">
        <h1>Profile Page</h1>
      </div>
    );
  }
}
