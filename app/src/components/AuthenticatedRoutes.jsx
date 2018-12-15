/**
 * AuthenticatedRoutes.jsx
 * Wrapper component for routes that require token and permission authentication
 */

// Node Modules
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

/**
 * Private Authentication Route
 * @param {Component} component
 */
export const PrivateRoute = ({component: Component, tokenName, ...rest}) => (
  <Route {...rest} render = {props => (
    localStorage.getItem(tokenName) ? <Component {...props} /> :
    <Redirect to = {{ pathname: '/login', state: { from: props.location }}} />
  )} />
);
