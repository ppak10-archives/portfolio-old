/**
 * Header.jsx
 * Different header components for specific page layouts
 */

/**
 * Node Modules
 */

import React from 'react';

/**
 * Container Components
 */

import {Alert} from '../containers';

/**
 * Simple Header Component
 */

const Header = ({pageTitle}) => (
  <h1 className = "page-header">{pageTitle}</h1>
);

/**
 * Alert Header Component Wrapper
 */

const AlertHeader = ({pageTitle}) => (
  <div>
    <Header pageTitle = {pageTitle} />
    <Alert />
  </div>
);

export {Header, AlertHeader};
