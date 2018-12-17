/**
 * index.js
 * Entry file to build front-end
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Style
import * as Style from './style';

// Root Component
import {Root} from './Root';

// Document Element
render(<Root />, document.getElementById('root'));
