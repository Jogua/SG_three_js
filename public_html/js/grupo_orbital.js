function GrupoOrbital() {
    var nodoRaiz = new THREE.Object3D();
    
    var planetas = [];
    
    var sol = new Sol("sol", 5, 0.1, "textures/sol.jpg");
    nodoRaiz.add(sol.getNodo());
    
    var tierra = new Planeta("tierra", 3, 16, 0.02, 0.02, "textures/tierra.jpg");
    planetas.push(tierra);
    var luna = new Satelite("luna", 1, 5, 0, 0.04, "textures/luna.jpg");
    luna.setPickableTras(true);
//    tierra.setPickableTras(true);
    tierra.addSatelite(luna);
    
    nodoRaiz.add(tierra.getNodo());
    
    this.animar = function (){
        sol.animar();
        for(var i = 0; i<planetas.length; i++){
            planetas[i].animar();
        }
    };
    
    this.getNodo = function (){
        return nodoRaiz;
    };
}