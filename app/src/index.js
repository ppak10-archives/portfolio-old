/**
 * index.js
 * Entry file to build front-end
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// CSS Styles
import './stylesheets/main.less';

// Root Component
import {Root} from './Root';

// Font Awesome Icons
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

// Document Element
render(<Root />, document.getElementById('root'));
