import './style.css'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {DragControls} from 'three/examples/jsm/controls/DragControls';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls'

const scene = new THREE.Scene();

//#region Cube

// //objects= can be many things: primitive geometries, imported models, particals, lights
// //in order to create a visible object, we need to call a mesh, which is the combination, add it to a scene and render it along with a camera
// //bewteen geometry and material
// const geometry1 = new THREE.BoxGeometry(2,1,1);
// const material = new THREE.MeshBasicMaterial({color:'red'});
// const cube = new THREE.Mesh(geometry1, material);

// let cubePosition = new THREE.Vector3(1,-1,-2);
// cube.position.set(cubePosition.x,cubePosition.y, cubePosition.z);

// scene.add(cube);


// // cube.rotateY(Math.PI/2);
// // cube.rotateZ(Math.PI/2);
// cube.rotation.reorder('XYZ');
// cube.rotation.y = Math.PI*0.25;
// cube.rotation.z = -Math.PI*0.25;
// //camera.lookAt(cube.position);
//cube.position=> the position property is a Vector3, which can represent A point in 3D space or a vector itself.
//cube.position.normalize();//transform the vector into a vector of length 1. 
//#endregion

let listOfObjects = [];
const verticalFieldOfView = 75;
const containerSize = {widht: 800, height:600};
const aspectRatio = containerSize.widht/containerSize.height;

const camera = new THREE.PerspectiveCamera(verticalFieldOfView, aspectRatio);


camera.position.z = 5; 
camera.position.x = 0;
camera.position.y = 0;
scene.add(camera);

const shape = new THREE.Shape();
shape.arc(-1,0,0.01,0, Math.PI*2, false);


const conduitSettings = {curveSegments :50, steps:20, bevelEnable:false };

const geometry = new THREE.ExtrudeGeometry( shape, conduitSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const conduit = new THREE.Mesh( geometry, material ) ;
scene.add( conduit );

const axesHelper = new THREE.AxesHelper();//helper to see the axis to get some reference.
axesHelper.position.set(0,0,0);
scene.add(axesHelper);

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"red"})
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"blue"})
);
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"yellow"})
);
group.add(cube3);

cube1.position.set(0,0,0);
cube2.position.set(1,0,0);
cube3.position.set(2,0,0);

group.position.set(-1,2,-5);
group.rotation.y=Math.PI*0.5;

const canvas = document.querySelector('.webgl');
//console.log(canvas);
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
);
renderer.setSize(containerSize.widht, containerSize.height);

listOfObjects.push(group);
listOfObjects.push(conduit);



// add event listener to highlight dragged objects

const orbit = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
orbit.update();

animate();
function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	
    renderer.render( scene, camera );
	orbit.update();
    //dragAndDrop.update();
}
