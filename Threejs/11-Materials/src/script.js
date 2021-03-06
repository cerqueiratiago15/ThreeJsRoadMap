import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Load textures
 */
const textureManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(textureManager);

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
const colorTexture = textureLoader.load('/textures/door/color.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const mapcapTexture = textureLoader.load('/textures/matcaps/3.png');
const gradientsTexture = textureLoader.load('/textures/gradients/3.jpg')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// materials
const material = new THREE.MeshMatcapMaterial();
material.matcap = mapcapTexture;
//const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshBasicMaterial();
// material.map = colorTexture;
//material.color.set('red');
//material.color = new THREE.Color('yellow');
//material.wireframe = true;
// material.opacity = 0.5;
// material.transparent = true;
// material.alphaMap = alphaTexture;
 material.side = THREE.DoubleSide;
material.flatShading = true;
// meshes
const sphere = new  THREE.Mesh(new THREE.SphereBufferGeometry(0.5,16,16),material);
sphere.position.x = -1.5;


const plane = new  THREE.Mesh(new THREE.PlaneBufferGeometry(1,1),material);

const torus = new  THREE.Mesh(new THREE.TorusBufferGeometry(0.3,0.2,16,32),material);
torus.position.x = 1.5;


scene.add(plane,torus,sphere);
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //rotate meshes
    torus.rotation.y=1*elapsedTime;
    torus.rotation.x=1*elapsedTime;

    plane.rotation.y=1*elapsedTime;
    plane.rotation.x=1*elapsedTime;

    sphere.rotation.y=1*elapsedTime;
    sphere.rotation.x=1*elapsedTime;

    
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()