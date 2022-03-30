import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
 
let cursors = {
    x:0,
    y:0
};
// let cursorStartPosition = {x:0, y:0};
window.addEventListener('mousemove',event=>{

    cursors.x = (event.clientX/sizes.width -0.5)*-1;
    cursors.y = (event.clientY/sizes.height - 0.5);
    //console.log(cursors);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera near and far clip the image in a 3d perspective
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0;
camera.position.y = 0;

let currentZDistance = 2;
camera.position.z = currentZDistance;
camera.lookAt(mesh.position)
scene.add(camera)

const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.update();
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()
renderer.render(scene, camera);
// let handled = false;
// cursorStartPosition.x = cursors.x;
// cursorStartPosition.y = cursors.y;
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //nice Way to rotate object like revit 
    
    //orbit.update();
    // Call tick again on the next frame 60 ftps 
    orbit.update();
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
    //#region Navisworks navigation
    // this is almost equal to navisworks navigation. it is missing maintain the navigation style
//    if(handled){
//     camera.position.x = Math.sin((cursors.x+cursorStartPosition.x)*Math.PI*2)*currentZDistance;
//     camera.position.z = Math.cos((cursors.x+cursorStartPosition.x)*Math.PI*2)*currentZDistance;
//     camera.position.y = (cursors.y+cursorStartPosition.y)*currentZDistance;
//     camera.lookAt(mesh.position);
//     // Render
//     renderer.render(scene, camera);
//     console.log(handled);
//    }
//#endregion
}

//#region Navisworks navigation style
// window.addEventListener('mousedown',event=>{

//     if (canvas==event.target && event.button==1 && event.shiftKey==true) {

//         handled = true;
//     }
    
// });
// window.addEventListener('mouseup', event=>{
//     handled = false;
//     if (canvas==event.target && event.button==1 && event.shiftKey==true) {
        
//         cursorStartPosition.x = cursors.x;
//         cursorStartPosition.y = cursors.y;
//     }
// });
//#endregion
tick();