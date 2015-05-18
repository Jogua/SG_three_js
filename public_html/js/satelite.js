function Satelite(nombre, radio, distanciaAlPlaneta, vRotacion, vTraslacion, nombreTextura) {

    var astro = new Astro(radio, vRotacion, nombreTextura);

    var raiz = new THREE.Object3D();
    raiz.name = nombre;

    var nodoTraslacion = new THREE.Object3D();
    nodoTraslacion.position.x = distanciaAlPlaneta;
    nodoTraslacion.add(astro.getEsfera());

    raiz.add(nodoTraslacion);

    this.animar = function () {
        astro.animar();
        raiz.rotation.y += vTraslacion;
    };

    this.getNodo = function () {
        return raiz;
    };
}