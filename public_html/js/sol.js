function Sol(nombre, radio, vRotacion, nombreTextura){
    
    var astro = new Astro(radio, vRotacion, nombreTextura);

    astro.getEsfera().name = nombre;

    this.animar = function () {
        astro.animar();
    };

    this.getNodo = function () {
        return astro.getEsfera();
    };
}