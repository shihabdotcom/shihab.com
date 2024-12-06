// Three.js basic setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, 500);
document.getElementById("viewer").appendChild(renderer.domElement);

// Light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// 3D Model Loader
const loader = new THREE.GLTFLoader();
loader.load('pc-model.glb', function (gltf) {
  scene.add(gltf.scene);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
