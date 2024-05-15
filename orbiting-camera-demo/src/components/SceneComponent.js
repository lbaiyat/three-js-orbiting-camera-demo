import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { useEffect  } from "react";

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry
// Create a cube geometry
const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
    new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
// scene.add(cube);

// Create a cone geometry
const coneGeometry = new THREE.ConeGeometry(3, 5, 20);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Magenta
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 10;
// scene.add(cone);

// Create a sphere geometry
const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Yellow
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.position.x = +10;
scene.add(sphere);

// Add the cube to the scene

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

// Create 1000 "star-like" objects
for (let i = 0; i < 2000; i++) {
    const size = Math.random() * 0.5; // Random size between 0 and 1.5
    const geometry = new THREE.SphereGeometry(size, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White
    const star = new THREE.Mesh(geometry, material);
    star.position.set(
        getRandomPosition(-50, 50), // X position range
        getRandomPosition(-50, 50), // Y position range
        getRandomPosition(-50, 50)  // Z position range
    );
    scene.add(star);
}



// Position the camera
// camera.position.z = 35;
camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Create a function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    const speed = 0.34;
    camera.position.x = Math.sin(speed * Date.now() * 0.001) * 20;
    camera.position.z = Math.cos(speed * Date.now() * 0.001) * 20;
    camera.lookAt(cube.position);

    // Render the scene
    renderer.render(scene, camera);
}

// Call the animate function


// Call the animate function
// animate();

function SceneComponent ()  {
    useEffect(() => {
        // gridSetup();
        animate();


        return () => {
            // mountRef.current.removeChild(renderer.domElement);
            // // scene.remove(cube);
            // geometry.dispose();
            // material.dispose();
        };
    }, []);

}

export default SceneComponent;