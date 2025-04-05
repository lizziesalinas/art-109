
// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

scene.background = new THREE.Color(0x87CEEB);  // Light Blue


const container = document.getElementById('three-container');
container.appendChild(renderer.domElement);

renderer.setAnimationLoop( animate );
document.body.appendChild(renderer.domElement);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);


// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader(); // to load 3d models

loader.load ('textures/dog.gltf', function (gltf) {
const dog = gltf.scene;
dog.position.set(0, 2, 0);
scene.add(dog);
})




// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
const texture = new THREE.TextureLoader().load('textures/grass.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add( cube );
cube.position.set(0, 0, 0);

const geometry2 = new THREE.BoxGeometry( 1.5, 1, 1 );
const texture2 = new THREE.TextureLoader().load('textures/water.jpg');
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const cube2 = new THREE.Mesh(geometry2, material2);
scene.add( cube2 );
cube2.position.set(2, 0, 0); // Moves cube2 2 units to the right along the X-axis

const geometry3 = new THREE.BoxGeometry( 1, 1, 1.5 );
const texture3 = new THREE.TextureLoader().load('textures/fire.jpg');
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const cube3 = new THREE.Mesh(geometry3, material3);
scene.add( cube3 );
cube3.position.set(-2, 0, 0); // Moves cube2 2 units to the right along the X-axis

camera.position.z = 5;

function animate() {
    
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.x += 0.03;
  cube2.rotation.y += 0.03;

  cube3.rotation.x += 0.03;
  cube3.rotation.y += 0.03;
    renderer.render( scene, camera );
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize, false);
