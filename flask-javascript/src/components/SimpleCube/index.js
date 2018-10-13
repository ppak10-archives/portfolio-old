// ----------------------------------------------------------------------------
// Original Creator: Will Bamford
// File Developer: Peter Pak
// Description: Component for simple cube example
// ----------------------------------------------------------------------------

// Modules Import -------------------------------------------------------------
import React, { Component } from 'react';                                       // Import react from component
import * as THREE from 'three';                                                 // Import three.js module for component
// ----------------------------------------------------------------------------

// Simple Cube Example Component ----------------------------------------------
class SimpleCubeExample extends Component{                                      // Component for simple cube example
  constructor(props) {                                                          // Constructor for component
    super(props);                                                               // Super required for react component

    this.start = this.start.bind(this);                                         // Bind start method to class
    this.stop = this.stop.bind(this);                                           // Bind stop method to class
    this.animate = this.animate.bind(this);                                     // Bind animate method to class
  }

  componentDidMount() {                                                         // When react component is first mounted
    const width = this.mount.clientWidth                                        // Retrieves client width from component ref
    const height = this.mount.clientHeight                                      // Retrieves client height from component ref

    const scene = new THREE.Scene()                                             // Declares three.js scene
    const camera = new THREE.PerspectiveCamera(                                 // Declares three.js perspective camera
      75,
      width / height,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ antialias: true })               // Declares three.js webgl renderer
    const geometry = new THREE.BoxGeometry(1, 1, 1)                             // Declares three.js box geometry
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })           // Declares three.js mesh basic material
    const cube = new THREE.Mesh(geometry, material)                             // Declares mesh with geometry and material

    camera.position.z = 4                                                       // Sets camera position z value
    scene.add(cube)                                                             // Adds cube to scene constant
    renderer.setClearColor('#000000')                                           // Sets renderer constant clear color
    renderer.setSize(width, height)                                             // Sets renderer constant size

    this.scene = scene                                                          // Sets scene value to class
    this.camera = camera                                                        // Sets camera value to class
    this.renderer = renderer                                                    // Sets renderer value to class
    this.material = material                                                    // Sets material value to class
    this.cube = cube                                                            // Sets cube value to class

    this.mount.appendChild( this.renderer.domElement )                          // Adds renderer to mount reference
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
    this.cube.rotation.x += 0.01                                                // Changes the cube's x rotation
    this.cube.rotation.y += 0.01                                                // Changes the cube's y rotation

    this.renderScene()                                                          // Calls render scene method for three.js
    this.frameId = window.requestAnimationFrame(this.animate)                   // Creates loop for animate method
  }

  renderScene(){                                                                // Method called to render three.js scene
    this.renderer.render(this.scene, this.camera)                               // Uses three.js renderer to render scene
  }
  
  render(){                                                                     // Render method to hold three.js component
    return (                                                                    // Returns div to hold reference to scene
      <div
        style = {{ width: '400px', height: '400px' }}
        ref = { ( mount ) => { this.mount = mount }}
      />
    )
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SimpleCubeExample;                                               // Export simple cube example component
// ----------------------------------------------------------------------------
