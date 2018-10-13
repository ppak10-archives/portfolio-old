// ----------------------------------------------------------------------------
// Original Creator: Adam Leeper
// File Developer: Peter Pak
// Description: Component for three.js stl loader example
// ----------------------------------------------------------------------------

// Modules Import -------------------------------------------------------------
import React, { Component } from 'react';                                       // Import react from component
import * as THREE from 'three';                                                 // Import three.js module for component
import { STLLoader } from 'three/examples/js/loaders/STLLoader';                // Import three.js examples with plugin
// ----------------------------------------------------------------------------

// Simple Cube Example Component ----------------------------------------------
class LoaderSTLExample extends Component{                                       // Component for stl loader example
  constructor(props) {                                                          // Constructor for component
    super(props);                                                               // Super required for react component

    this.start = this.start.bind(this);                                         // Bind start method to class
    this.stop = this.stop.bind(this);                                           // Bind stop method to class
    this.animate = this.animate.bind(this);                                     // Bind animate method to class
    this.addShadowedLight = this.addShadowedLight.bind(this);
  }

  componentDidMount() {                                                         // When react component is first mounted
    const width = this.mount.clientWidth                                        // Retrieves client width from component ref
    const height = this.mount.clientHeight                                      // Retrieves client height from component ref
    const pixelRatio = this.mount.devicePixelRatio

    // Camera -----------------------------------------------------------------
    const camera = new THREE.PerspectiveCamera(                                 // Declares three.js perspective camera
      35,
      width / height,
      1,
      15
    )
    camera.position.set(3, 0.15, 3);                                            // Sets camera position values
    const cameraTarget = new THREE.Vector3(0, -0.25, 0);

    // Scene ------------------------------------------------------------------
    const scene = new THREE.Scene();                                            // Declares three.js scene
    scene.background = new THREE.Color( 0x72645b );                             // Sets scene background color
    scene.fog = new THREE.Fog( 0x72645b, 2, 15 );                               // Sets fog for scene
    this.scene = scene                                                          // Sets scene value to class

    // Ground -----------------------------------------------------------------
    const plane = new THREE.Mesh(
      new THREE.PlaneBufferGeometry( 40, 40 ),
      new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
    );
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -0.5;
    scene.add( plane );

    plane.receiveShadow = true;

    // STL Loaders ------------------------------------------------------------
    const loader = new STLLoader();

    loader.load('./static/models/stl/ascii/slotted_disk.stl',
      function( geometry ) {

        const material = new THREE.MeshPhongMaterial({
          color: 0xff5533,
          specular: 0x111111,
          shininess: 200
        });

        const mesh = new THREE.Mesh( geometry, material );

        mesh.position.set( 0, -0.25, 0.6 );
        mesh.rotation.set( 0, -Math.PI / 2, 0 );
        mesh.scale.set( 0.5, 0.5, 0.5 );

        mesh.castShadow = true;
        mesh.recieveShadow = true;

        scene.add( mesh );
      }
    );

    const material = new THREE.MeshPhongMaterial({
      color: 0xAAAAAA,
      specular: 0x111111,
      shininess: 200
    });

    loader.load('./static/models/stl/binary/pr2_head_pan.stl',
      function( geometry ) {
        const mesh = new THREE.Mesh( geometry, material );

        mesh.position.set( 0, -0.37, -0.6 );
        mesh.rotation.set( -Math.PI/2, 0, 0 );
        mesh.scale.set( 2, 2, 2 );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );
      }
    );

    loader.load('./static/models/stl/binary/pr2_head_tilt.stl',
      function( geometry ){
        const mesh = new THREE.Mesh( geometry, material );

        mesh.position.set( 0.136, -0.37, -0.6 );
        mesh.rotation.set( -Math.PI/2, 0.3, 0 );
        mesh.scale.set( 2, 2, 2 );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );
      }
    );

    loader.load('./static/models/stl/binary/colored.stl',
      function( geometry ){
        const meshMaterial = material;
        if (geometry.hasColors){
          meshMaterial = new THREE.MeshPhongMaterial({
            opacity: geometry.alpha,
            vertexColors: THREE.VertexColors
          });
        }

        const mesh = new THREE.Mesh( geometry, material );

        mesh.position.set( 0.5, 0.2, 0 );
        mesh.rotation.set( -Math.PI/2, Math.PI/2, 0 );
        mesh.scale.set( 0.3, 0.3, 0.3 );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );
      }
    );

    // Lighting ---------------------------------------------------------------
    scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ));
    this.addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
    this.addShadowedLight(0.5, 1, -1, 0xffaa00, 1);

    // Renderer ---------------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({ antialias: true });              // Declares three.js webgl renderer
    renderer.setPixelRatio( pixelRatio );
    renderer.setSize(width, height);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    this.renderer = renderer                                                    // Sets renderer value to class
    this.mount.appendChild( this.renderer.domElement )                          // Adds renderer to mount reference

    this.camera = camera                                                        // Sets camera value to class
    this.cameraTarget = cameraTarget
    this.material = material                                                    // Sets material value to class

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
    this.camera.lookAt( this.cameraTarget );

    this.renderScene()                                                          // Calls render scene method for three.js
    this.frameId = window.requestAnimationFrame(this.animate)                   // Creates loop for animate method
  }

  renderScene(){                                                                // Method called to render three.js scene
    this.renderer.render(this.scene, this.camera)                               // Uses three.js renderer to render scene
  }

  addShadowedLight(x, y, z, color, intensity){
    const directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set(x, y, z);
    this.scene.add(directionalLight);

    directionalLight.castShadow = true;
    const d = 1;
    directionalLight.shadow.camera.left = -d;
		directionalLight.shadow.camera.right = d;
		directionalLight.shadow.camera.top = d;
		directionalLight.shadow.camera.bottom = -d;
		directionalLight.shadow.camera.near = 1;
		directionalLight.shadow.camera.far = 4;
		directionalLight.shadow.mapSize.width = 1024;
		directionalLight.shadow.mapSize.height = 1024;
		directionalLight.shadow.bias = -0.002;
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
export default LoaderSTLExample                                                 // Export loader stl example component
// ----------------------------------------------------------------------------
