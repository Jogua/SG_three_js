function Astro(radio, vRotacion, nombreTextura) {

    var textura = THREE.ImageUtils.loadTexture(nombreTextura);

    var esferaGeometry = new THREE.SphereGeometry(radio, 100, 100);
    var esferaMaterial = new THREE.MeshPhongMaterial({map: textura});
    var esfera = new THREE.Mesh(esferaGeometry, esferaMaterial);
    esfera.name = "esfera";

    var pickableRotacion = false;

    this.animar = function () {
        if (!pickableRotacion || !MOUSE.isPressed()) {
            esfera.rotation.y += vRotacion;
        }
    };

    this.getEsfera = function () {
        return esfera;
    };

    this.setPickableRot = function (pick) {
        pickableRotacion = pick;
    };

    this.setMaterialEmisivo = function (emisivo) {
        if (emisivo) {
            esfera.material = new THREE.MeshBasicMaterial({map: textura});
        } else {
            esfera.material = new THREE.MeshPhongMaterial({map: textura});
        }
    }
}