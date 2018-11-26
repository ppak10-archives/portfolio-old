import React, {Component} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

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
 * App Component
 */
import App from '../components/App';

import configureStore from '../store';
const store = configureStore();

/**
 * Root class to load React component
 * @type {Object}
 */
export default class Root extends Component {
  /**
   * React render method
   * @return {[type]} [description]
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Provider store={store}>
            <App />
          </Provider>
        </Switch>
      </BrowserRouter>
    );
  }
}
