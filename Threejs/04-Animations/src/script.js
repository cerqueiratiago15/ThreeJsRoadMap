import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
//requestAnimationFrame => is intended to call a function provided in the next frame (60 fps - frames per second)


const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const materia2 = new THREE.MeshBasicMaterial({ color: 'green' });
const cube2 = new THREE.Mesh(geometry2, materia2);
scene.add(cube2);


gsap.to(cube2.position, { delay:1, x:4});
gsap.to(cube2.position, {delay:3, x:0});


let time = Date.now();



let clock = new THREE.Clock();
const tick = () =>{
   
    // mesh.rotation.x+=0.01;
    // mesh.rotation.y+=0.01; //this type of animation is dependent on the fps of the computer. 
    //in order to avoid that, We can associate with time, that regardless the computer will be the same

    // let currentTime = Date.now();
    // let delta = currentTime - time;
    // time = currentTime;
    //console.log(delta);
    // mesh.rotation.x+=0.001*delta;
    // mesh.rotation.y+=0.001*delta;
    mesh.position.x= Math.sin(clock.getElapsedTime()*Math.PI);
    mesh.position.y= Math.cos(clock.getElapsedTime()*Math.PI);
    mesh.position.z= Math.sin(clock.getElapsedTime()*Math.PI);
    mesh.rotation.y=clock.getElapsedTime()*Math.PI;
    //camera.lookAt(mesh.position);
   
    window.requestAnimationFrame(tick);

    renderer.render(scene, camera);

}
tick();