window.addEventListener('load', () => {
    //Timers
    function Inicio() {
        var tiempo = setInterval(() => {
            var encabezado = document.querySelector('h1');
            if (encabezado.style.fontSize == '50px') {
                encabezado.style.fontSize = '30px';
            } else {
                encabezado.style.fontSize = '50px'
            }
        }, 200000);
        return tiempo ;
    }

    var tiempo = Inicio()
    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        alert("Has iniciado el contador de encabezado")
        Inicio();
    });
    var stop = document.querySelector("#stop");
    stop.addEventListener('click', () => {
        alert("Has parado el contador de encabezado")
        clearInterval(tiempo);
    });
});