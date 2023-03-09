// Eventos de raton cuando el usuario mueve el mouse sobre un obj
var boton = document.querySelector('#boton')
var body = document.getElementsByTagName("body")


function cambiarcolor(){
    var bgboton = boton.style.background;
    var bodybg = body[0].style.background;
    if( bodybg == "white"|| bgboton == "green"){

        boton.style.background = "red";
        body[0].style.background = "blue";
    }else{
        boton.style.background = "green";
        body[0].style.background = "white";
    }
    return true;
} 

boton.addEventListener('click',function(){
    cambiarcolor();
})