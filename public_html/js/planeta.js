function Planeta(nombre, radio, distanciaAlSol, vRotacion, vTraslacion, nombreTextura) {

    var astro = new Astro(radio, vRotacion, nombreTextura);

    var satelites = [];
    
    var raiz = new THREE.Object3D();
    raiz.name = nombre;
    
    var nodoTraslacion = new THREE.Object3D();
    nodoTraslacion.position.x = distanciaAlSol;
    nodoTraslacion.add(astro.getEsfera());

    raiz.add(nodoTraslacion);

    this.animar = function () {
        astro.animar();
        raiz.rotation.y += vTraslacion;
        for(var i = 0; i<satelites.length; i++){
            satelites[i].animar();
        }
    };

    this.addSatelite = function (satelite) {
        nodoTraslacion.add(satelite.getNodo());
//        raiz.add(satelite.getNodo());
        satelites.push(satelite);
    };

    this.getNodo = function () {
        return raiz;
    }
}