// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for simple cube example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import SimpleCubeExample from '../components/SimpleCube';                              // Imports three.js simple cube component
// ----------------------------------------------------------------------------

// Simple Cube Example Page ---------------------------------------------------
const SimpleCube = () => (                                                      // Simple cube page component
  <div className = "col">
    <h1>Simple Cube Example</h1>
    <p>Example of a simple cube in three.js</p>
    <SimpleCubeExample />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SimpleCube;                                                      // Export simple cube page component
// ----------------------------------------------------------------------------
