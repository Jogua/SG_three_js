function Sol(nombre, radio, vRotacion, nombreTextura){
    
    var astro = new Astro(radio, vRotacion, nombreTextura);

    astro.getEsfera().name = nombre;
    astro.setMaterialEmisivo(true);

    this.animar = function () {
        astro.animar();
    };

    this.getNodo = function () {
        return astro.getEsfera();
    };

    this.setPickableRot = function (pick) {
        astro.setPickableRot(pick);
    };
}