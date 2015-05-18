function Satelite(nombre, radio, distanciaAlPlaneta, vRotacion, vTraslacion, nombreTextura) {

    var astro = new Astro(radio, vRotacion, nombreTextura);

    var raiz = new THREE.Object3D();
    raiz.name = nombre;

    var nodoTraslacion = new THREE.Object3D();
    nodoTraslacion.position.x = distanciaAlPlaneta;
    nodoTraslacion.add(astro.getEsfera());

    raiz.add(nodoTraslacion);
    
    var pickableTraslacion = false;

    this.animar = function () {
        astro.animar();
        if (!pickableTraslacion || !MOUSE.isPressed()) {
            raiz.rotation.y += vTraslacion;
        }
    };

    this.getNodo = function () {
        return raiz;
    };

    this.setPickableRot = function (pick) {
        astro.setPickableRot(pick);
    };

    this.setPickableTras = function (pick) {
        pickableTraslacion = pick;
    };
}