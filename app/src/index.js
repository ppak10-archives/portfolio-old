/**
 * index.js
 * Entry file to build front-end
 */

/**
 * Node Modules
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

/**
 * CSS Styles
 */

import './stylesheets/main.less';

/**
 * App Container
 */

import App from './containers/App';

/**
 * Redux Store
 */

import configureStore from './store';
const store = configureStore();

/**
 * Font Awesome Icons
 */

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faDiceD6,
  faObjectGroup,
  faCode,
  faServer,
  faAtom,
  faHome,
  faBriefcase,
  faFlask,
  faGraduationCap,
  faDownload,
  faUserCircle,
  faAddressCard,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    fab,
    faDiceD6,
    faObjectGroup,
    faCode,
    faServer,
    faAtom,
    faHome,
    faBriefcase,
    faFlask,
    faGraduationCap,
    faDownload,
    faUserCircle,
    faAddressCard,
    faSitemap);

/**
 * Document Element
 */

render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root')
);
