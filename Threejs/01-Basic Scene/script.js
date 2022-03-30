//console.log(THREE);//Just to check the THREE object
//in order to create a scene, We need at least 3 elements: The object, a camera and a Renderer. 

//scene = it is a container. This container wrap some elements of the scene, like object and camera. 
const scene = new THREE.Scene();

//objects= can be many things: primitive geometries, imported models, particals, lights
//in order to create a visible object, we need to call a mesh, which is the combination, add it to a scene and render it along with a camera
//bewteen geometry and material
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'red'});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);// till this point the cube exists in the browser, but will no be visible, so We need the camera. 

const verticalFieldOfView = 75; // this is the amplitude of visualization tha the camera will have in the Z direction;
const containerSize = {widht: 800, height:600};
const aspectRatio = containerSize.widht/containerSize.height;

const camera = new THREE.PerspectiveCamera(verticalFieldOfView, aspectRatio);
camera.position.z = 3; //stepping back from the object 3 units
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera); //yet till this point the user won't be able to see the cube because the scene was not render
//so We need a renderer to do that through your point of view (camera);

const canvas = document.querySelector('.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer(
    {
        canvas: canvas
    }
);
renderer.setSize(containerSize.widht, containerSize.height);

renderer.render(scene,camera); 
 