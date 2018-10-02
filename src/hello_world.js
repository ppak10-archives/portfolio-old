import React from 'react';
import { render } from 'react-dom';

render((
  <div>
    <h1>Hello World</h1>
    <p>Built with webpack</p>
    <p>Without @babel/cli</p>
    <p>Cleaned up</p>
  </div>
),
  document.getElementById('content')
);
