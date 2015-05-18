var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var grupoOrbital;
var step = 0;

var onClick = function (e) {
    MOUSE.click();
};

//var distancia = 10;
//var zoom = function (e) {
//    if (e.deltaY > 0) {
//        distancia -= 0.5;
//    } else if (e.deltaY) {
//        distancia += 0.5;
//    }
//}

addEventListener("click", onClick);
//addEventListener("mousewheel", zoom);

main();

function renderScene() {
//    camera.position.z = distancia;
    step = 0.05;
    grupoOrbital.animar();
//    luna.animar();
//alert("h");
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}

function main() {


    renderer.setClearColor(0xFFFFFF, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true; //se habilita el modelado de sombra
    renderer.setSize(window.innerWidth, window.innerHeight);

//A�adir ejes
    var axes = new THREE.AxisHelper(20); //para dibujar los ejes
    scene.add(axes); //a�adir a la escena

    grupoOrbital = new GrupoOrbital();
    scene.add(grupoOrbital.getNodo());

//A�adir luz
//Si se usa materiales hay q poner una luz pq si no no se ve.
    var pointLight = new THREE.PointLight(0xffffff);
//    spotLight.position.set(-40, 60, -10);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);
    
//Luz ambiente
    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

// A�adir c�mara
    camera.position.x = 30;
    camera.position.y = 30;
    camera.position.z = 30;
    camera.lookAt(scene.position);

//Esta linea es muy importante. Si no se pone no funciona
    $("#canvas").append(renderer.domElement);

    renderScene();
}
