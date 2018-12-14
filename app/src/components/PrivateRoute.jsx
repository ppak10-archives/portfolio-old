/**
 * PrivateRoute.jsx
 * Wrapper component for cookie authentication for private routes
 */

/**
 * Node Modules
 */

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render = {props => (
    localStorage.getItem('user_token') ? <Component {...props} /> :
    <Redirect to = {{ pathname: '/login', state: { from: props.location }}} />
  )} />
);
