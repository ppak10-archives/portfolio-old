/**
 * Routes.jsx
 * Wrapper component for routes that require additional handling
 */

// Node Modules
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

/**
 * Private Authenticated Route
 * @param {Component} component
 */
export const PrivateRoute = ({component: Component, tokenName, ...rest}) => (
  <Route {...rest} render = {(props) => (
    localStorage.getItem(tokenName) ? <Component {...props} /> :
    <Redirect to = {{ pathname: '/login', state: { from: props.location }}} />
  )} />
);

/**
 * Hide when Authenticated Route
 * @param {Component} component
 */
export const HideRoute = ({component: Component, tokenName, ...rest}) => (
  <Route {...rest} render = {(props) => (
    localStorage.getItem(tokenName) ? <Redirect to = "/" /> :
    <Component {...props} />
  )} />
);
