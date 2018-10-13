// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component layout for obj file loader example page
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';                                                      // Import react for component
// ----------------------------------------------------------------------------

// Component Import -----------------------------------------------------------
import LoaderOBJMTLExample from '../components/LoaderOBJMTL';                         // Import stl loader example component
// ----------------------------------------------------------------------------

// STL loader Example Page ----------------------------------------------------
const LoaderOBJMTL = () => (                                                    // OBJ & MTL loader example page component
  <div className = "col">
    <h1>Three.js: OBJ and MTL Loader Example</h1>
    <p>Example use of a&nbsp;
      <span>
        <a target = "_blank" rel="noopener noreferrer"
          href = "https://threejs.org/examples/#webgl_loader_obj_mtl">
           object and material loader
        </a>
      </span>
       &nbsp;in three.js
    </p>
    <LoaderOBJMTLExample />
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default LoaderOBJMTL;                                                    // Export OBJ & MTL loader component
// ----------------------------------------------------------------------------
