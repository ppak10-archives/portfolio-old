// ----------------------------------------------------------------------------
// Original Creator: Three.js
// File Developer: Peter Pak
// Description: Component for three.js stl loader example
// ----------------------------------------------------------------------------

// Modules Import -------------------------------------------------------------
import React, { Component } from 'react';                                       // Import react from component
import * as THREE from 'three';                                                 // Import three.js module for component
import { DDSLoader } from 'three/examples/js/loaders/DDSLoader';                // Import three.js examples with plugin
import { OBJLoader } from 'three/examples/js/loaders/OBJLoader';                // Import three.js examples with plugin
import { MTLLoader } from 'three/examples/js/loaders/MTLLoader';                // Import three.js examples with plugin
// ----------------------------------------------------------------------------

// Simple Cube Example Component ----------------------------------------------
class LoaderOBJMTLExample extends Component{                                       // Component for stl loader example
  constructor(props) {                                                          // Constructor for component
    super(props);                                                               // Super required for react component

    this.start = this.start.bind(this);                                         // Bind start method to class
    this.stop = this.stop.bind(this);                                           // Bind stop method to class
    this.animate = this.animate.bind(this);                                     // Bind animate method to class
  }

  componentDidMount() {                                                         // When react component is first mounted
    const width = this.mount.clientWidth                                        // Retrieves client width from component ref
    const height = this.mount.clientHeight                                      // Retrieves client height from component ref
    const pixelRatio = this.mount.devicePixelRatio

    // Camera -----------------------------------------------------------------
    const camera = new THREE.PerspectiveCamera(                                 // Declares three.js perspective camera
      45,
      width / height,
      1,
      2000
    )
    camera.position.z = 250;                                                    // Sets camera position values

    // Scene ------------------------------------------------------------------
    const scene = new THREE.Scene();                                            // Declares three.js scene
    this.scene = scene                                                          // Sets scene value to class

    // Lighting ---------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight ( 0xcccccc, 0.4 );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
    camera.add(pointLight);
    scene.add(camera);

    // OBJ and MTL Loaders ----------------------------------------------------
    THREE.Loader.Handlers.add( /\.dds$/i, new DDSLoader());
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath('./static/models/obj/male02/');
    mtlLoader.load('male02_dds.mtl',
      function ( materials ) {
        materials.preload();

        new OBJLoader()
          .setMaterials( materials )
          .setPath( './static/models/obj/male02/' )
          .load( 'male02.obj',
            function ( object ) {
              object.position.y = -95;
              scene.add( object );
            }
          );
      }
    );

    // Renderer ---------------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({ antialias: true });              // Declares three.js webgl renderer
    renderer.setPixelRatio( pixelRatio );
    renderer.setSize(width, height);
    this.renderer = renderer                                                    // Sets renderer value to class
    this.mount.appendChild( this.renderer.domElement )                          // Adds renderer to mount reference

    this.camera = camera                                                        // Sets camera value to class

    this.start()                                                                // Calls class start method
  }

  componentWillUnmount() {                                                      // When component is to be unmounted
    this.stop()                                                                 // Calls stop method animate loop
    this.mount.removeChild(this.renderer.domElement)                            // Removes renderer from mount reference
  }

  start() {                                                                     // Start method for three.js animation
    if (!this.frameId) {                                                        // If no current animation frame id is set
      this.frameId = requestAnimationFrame(this.animate)                        // Sets frame id by calling animate method
    }
  }

  stop() {                                                                      // Stop method for three.js animation
    cancelAnimationFrame(this.frameId)                                          // Cancels scheduled animation frome
  }

  animate() {                                                                   // Method fed into request animation frame
    const timer = Date.now() * 0.0005;

    this.camera.position.x = Math.cos( timer ) * 3;
    this.camera.position.z = Math.sin( timer ) * 3;
    this.camera.lookAt( this.scene.position );

    this.renderScene()                                                          // Calls render scene method for three.js
    this.frameId = window.requestAnimationFrame(this.animate)                   // Creates loop for animate method
  }

  renderScene(){                                                                // Method called to render three.js scene
    this.renderer.render(this.scene, this.camera)                               // Uses three.js renderer to render scene
  }

  render(){                                                                     // Render method to hold three.js component
    return (                                                                    // Returns div to hold reference to scene
      <div
        style = {{ width: '800px', height: '800px' }}
        ref = { ( mount ) => { this.mount = mount }}
      />
    )
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default LoaderOBJMTLExample                                              // Export loader obj mtl example component
// ----------------------------------------------------------------------------
