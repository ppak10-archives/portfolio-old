// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for stl file loader example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import LoaderSTLExample from '../components/LoaderSTL';                         // Import stl loader example component
// ----------------------------------------------------------------------------

// STL loader Example Page ----------------------------------------------------
const LoaderSTL = () => (                                                       // STL loader example page component
  <div className = "col">
    <h1>Three.js: STL Loader Example</h1>
    <p>Example of a&nbsp;
      <span>
        <a target = "_blank" rel="noopener noreferrer"
          href = "https://threejs.org/examples/#webgl_loader_stl">
          stl loader
        </a>
      </span>
       &nbsp;in three.js done by&nbsp;
      <span>
        <a target = "_blank" rel="noopener noreferrer"
          href = "https://github.com/aleeper">
          Adam Leeper
        </a>
      </span>
    </p>
    <LoaderSTLExample />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default LoaderSTL;                                                       // Export STL loader component
// ----------------------------------------------------------------------------
