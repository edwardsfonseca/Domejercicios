window.addEventListener('load', () => {
    var mostar = document.querySelector("#mostrar");
    var formu = document.querySelector('form');
    var boxdash = document.querySelector('.dashed');
    boxdash.style.display = "none";
    formu.addEventListener('submit', () => {
        console.log("evento capturado")
        var nombre = document.querySelector("#name").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;
    
    var datos =[edad,apellido,nombre];
    var i;
    for (i in datos){
        var parrafo = document.createElement('p');
        parrafo.append(datos[i]);
        boxdash.append(parrafo)

    }
    

        
    })

    formu.addEventListener("submit" ,() =>{
        mostar.addEventListener("click" ,() =>{
            boxdash.style.display = "block"
        })
    })

    // practicar eliminar los valores :D





});