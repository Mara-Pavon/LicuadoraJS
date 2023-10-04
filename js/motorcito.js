var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var botonLicuadora = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");

function controlarLicuadora() {
    if ( estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /*console.log("me prendiste");*/
    } else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /*console.log("me apagaste");*/ 
    }
} 
function hacerBrrBrr(){
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}