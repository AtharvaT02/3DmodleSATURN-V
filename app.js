//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;
let size = 3000000/window.innerWidth;
function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 55, size/9.5);
  
  const ambient = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambient);

  const element = document.getElementById("highlight");

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(50, 150, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("house/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  house.rotation.z += 0.005;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
function highlighter(clickedid) {
const infodiv = document.getElementById("infoid");
const infodiv1 = document.getElementById("firststageid");
const infodiv2 = document.getElementById("secoundstageid");
const infodiv3 = document.getElementById("thirdstageid");
const infodiv4 = document.getElementById("instrumentid");
const infodiv5 = document.getElementById("applospacecraftid");
  if(clickedid == 0){
    camera.position.set(0, 26, size/15);
    const element = document.getElementById("highlight");
    element.style.visibility = "visible";
    element.style.height = "30vw";
    infodiv.style.visibility = "visible";
    infodiv1.style.visibility = "visible";
    infodiv2.style.visibility = "hidden";
    infodiv3.style.visibility = "hidden";
    infodiv4.style.visibility = "hidden";
    infodiv5.style.visibility = "hidden";  
  }
  else if(clickedid == 1){
    camera.position.set(0,58, size/27);
    const element = document.getElementById("highlight");
    element.style.visibility = "visible";
    element.style.height = "30vw";
    infodiv.style.visibility = "visible";
    infodiv2.style.visibility = "visible";
    infodiv1.style.visibility = "hidden";
    infodiv3.style.visibility = "hidden";
    infodiv4.style.visibility = "hidden";
    infodiv5.style.visibility = "hidden";
  }
  else if(clickedid == 2){
    camera.position.set(0, 79, size/35);
    const element = document.getElementById("highlight");
    element.style.visibility = "visible";
    element.style.height = "30vw";
    infodiv.style.visibility = "visible";
    infodiv3.style.visibility = "visible";
    infodiv1.style.visibility = "hidden";
    infodiv2.style.visibility = "hidden";
    infodiv4.style.visibility = "hidden";
    infodiv5.style.visibility = "hidden";
  }else if(clickedid == 3){
    camera.position.set(0,83.6, size/55);
    const element = document.getElementById("highlight");
    element.style.visibility = "visible";
    element.style.height = "10vh";
    infodiv.style.visibility = "visible";
    infodiv4.style.visibility = "visible";
    infodiv1.style.visibility = "hidden";
    infodiv2.style.visibility = "hidden";
    infodiv3.style.visibility = "hidden";
    infodiv5.style.visibility = "hidden";
  }
  else if(clickedid == 4){
    camera.position.set(0, 97.5, size/45);
    const element = document.getElementById("highlight");
    element.style.visibility = "visible";
    element.style.height = "30vw";
    infodiv.style.visibility = "visible";
    infodiv5.style.visibility = "visible";
    infodiv1.style.visibility = "hidden";
    infodiv2.style.visibility = "hidden";
    infodiv3.style.visibility = "hidden";
    infodiv4.style.visibility = "hidden";
  }
}