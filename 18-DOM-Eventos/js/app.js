/*
    EVENTO:
        Cuando el usuario hace click en algún html
        Cuando se pasa el ratón por encima
        Cuando se carga una página
        Cuando se pulsa una tecla
        Cuando se envía un formulario
        Cuando se cambia de una entrada a otra en un formulario
        etc...


    MANEJADOR:
        Se encarga de realizar la acción tras capturar el evento

    Modelo de eventos en línea:
        Dentro de la etiqueta html se incluye un atributo para controlar el evento
        onclick, onmouseover, onmouseout, onload, etc...
        Se incluye dentro del html código javascript (no es tan legible, no reutilizable)

    Modelo de eventos del W3C
        No se incluye dentro de la etiqueta html
        Se utiliza un método addEventListener
        Se pueden crear varios eventos iguales en un mismo html (varios eventos click)
        Sintaxis:
            document.getElementById("id").addEventListener("evento_sin_on", funcion, false/true)
            //aquí false/true significa cómo va a ser la captura del evento (propagación, etc). Es decir si hay un div que contiene un p, puedes hacer que se ejecute antes el p que el div, o al revés.

*/

/*function colorear(){
    document.getElementById('encabezado').style.color='red';
}*/

function colorear(id){
    document.getElementById(id).style.color='red';
}

//onmouseover, onmouseout
function cambiarEstilo(id){
    document.getElementById(id).style.color='pink';
}

function cambiarOriginal(id){
    document.getElementById(id).style.color='initial'; //con initial reestablecemos el color original del evento
}

function mostrarFecha(){
    document.getElementById("p2").innerHTML = new Date();
}


document.getElementById("p3").addEventListener("click", saludo);
document.getElementById("p3").addEventListener("click", saludo2);
document.getElementById("p3").addEventListener("click", cambiarEstilosAleatorios);
function saludo(){ //Estas funciones, al contrario de las arrow function y anónimas, da igual en qué parte del javascript se pongan, se ejecutan igual de bien.
    alert("Hola!!!");
}

function saludo2(){
    alert("Qué tal??");
}

function cambiarEstilosAleatorios(){
    const num1 = Math.floor(Math.random() * 255) + 1;
    const num2 = Math.floor(Math.random() * 255) + 1;
    const num3 = Math.floor(Math.random() * 255) + 1;
    const colorAleatorio = `rgb(${num1}, ${num2}, ${num3})`;

    const fuentes = ["bold", "lighter", "normal"];
    const numAleatorio = Math.floor(Math.random() * 3);

    document.getElementById("p3").style.color = colorAleatorio;
    document.getElementById("p3").style.fontWeight = fuentes[numAleatorio];
}