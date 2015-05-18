function Astro(radio, vRotacion, nombreTextura){
    
    var textura = THREE.ImageUtils.loadTexture(nombreTextura);
    
    var esferaGeometry = new THREE.SphereGeometry(radio, 100, 100);
    var esferaMaterial = new THREE.MeshPhongMaterial({map:textura});
    var esfera = new THREE.Mesh(esferaGeometry, esferaMaterial);
    esfera.name = "esfera";
      
    
    this.animar = function (){
        esfera.rotation.y += vRotacion;
    };
    
    this.getEsfera = function (){
        return esfera;
    };
}