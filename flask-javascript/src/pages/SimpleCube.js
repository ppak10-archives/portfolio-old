// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for simple cube example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import SimpleCubeExample from '../components/SimpleCube';                       // Imports three.js simple cube component
// ----------------------------------------------------------------------------

// Simple Cube Example Page ---------------------------------------------------
const SimpleCube = () => (                                                      // Simple cube page component
  <div className = "col page">
    <h1>Three.js: Simple Cube Example</h1>
    <p>Example of a&nbsp;
      <span>
        <a target = "_blank" rel="noopener noreferrer"
          href = "https://codepen.io/WebSeed/pen/MEBoRq?editors=0010">
          simple cube
        </a>
      </span>
       &nbsp;in three.js done in React by&nbsp;
      <span>
        <a target = "_blank" rel="noopener noreferrer"
          href = "https://codepen.io/WebSeed/">
          Will Bamford
        </a>
      </span>
    </p>
    <SimpleCubeExample />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SimpleCube;                                                      // Export simple cube page component
// ----------------------------------------------------------------------------
