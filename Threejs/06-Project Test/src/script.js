import './style.css';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const canvas = document.querySelector('.webgl');
const cursor = {x:0, y:0};

const scene = new THREE.Scene();
const renderer = new THREE.WebGL1Renderer({canvas:canvas});
let size = {w: window.innerWidth, h: window.innerHeight};
canvas.width = size.w;
canvas.height = size.h;
renderer.setSize(size.w, size.h);
const camera = new THREE.PerspectiveCamera(75, size.w/size.h, 0.1, 10000);
window.addEventListener('resize',event=>{
    size.w = window.innerWidth;
    size.h = window.innerHeight;

    canvas.width = size.w;
    canvas.height = size.h;
    camera.aspect = size.w/size.h;
    camera.updateProjectionMatrix();
    renderer.setSize(size.w, size.h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //renderer.render(scene, camera);
});
window.addEventListener('scroll', event=>{
    
    window.scrollTo(0,0);

});
window.addEventListener('mousemove',event=>{
    cursor.x = event.clientX/size.w - 0.5;
    cursor.y = event.clientY/size.h - 0.5;
    //console.log(cursor);
});
let zoom = 0;
window.addEventListener('wheel',event=>{
  
    zoom += (event.deltaY/500)/5;
    //console.log(zoom);
})
scene.add(camera);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'red'});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;
cube.position.x = 0;
cube.position.y = 0;
camera.lookAt(cube.position);

// const control = new OrbitControls(camera, canvas);
// control.update();
renderer.render(scene, camera);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('dblclick',()=>{
    const fullScreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    if(!fullScreenElement){
        canvas.requestFullscreen();
    }
    else if(canvas.webkitFullscreenElement){
        document.webkitRequestFullscreen();
    }
    else{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    }
});
const animate = ()=>{
    
    camera.position.x = cursor.x;
    camera.position.y = cursor.y;
    camera.position.z = zoom;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};
animate();