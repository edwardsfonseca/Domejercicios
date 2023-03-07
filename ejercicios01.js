"use strict"
var caja = document.querySelector('#caja');
// con el queryselector podemos seleccionar el id o class que queramos modificar // 1 era Forma
//segunda forma de seleccionar un elemento lo dejo comentado para no dañar el codigo  de ambas maneras se puede usar 
/* document.getElementById('caja') */
// PODEMOS MODIFICAR ESTILOS , CREAR NUEVO TEXTO , CREAR CLASES .. //

caja.innerHTML = "Hola a todos nuevo texto :D"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white"
caja.style.className = "red";
//-------------------- Para conseguir elementos por su etiqueta---------------------------------------//

var todosLosDivs = document.getElementsByTagName('div') // el TagName nos permite localizar la etiqueta y llamarla para modificarla

// creamos un bucle 

var valor ;
for( valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector('#seccion').prepend(parrafo);
    }
}