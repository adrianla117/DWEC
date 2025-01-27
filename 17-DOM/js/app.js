/*
    DOM: Document Object Model



<!DOCTYPE html>
<html lang="en">
    <head>
        <title>DOM</title>
    </head>
    <body>
        <h1>DOM</h1>
        <a href="https://dom.org">Link</a>
    </body>
</html>

CÓMO ACCEDEMOS A LOS ELEMENTOS DEL DOM?
    document.getElementById("id")
    document.getElementsByTagName("etiqueta")
    document.getElementsByClassName("clase")
    document.querySelector("selector")
    document.querySelectorAll("selector")

*/

const parrafo1 = document.getElementById("parrafo1") //el ID que hay en el html
console.log(parrafo1);
console.log(parrafo1.innerHTML); //innerHTML se utiliza para acceder al contenido html (el texto) o para modificarlo
parrafo1.innerHTML = "Este es el nuevo valor del párrafo";

const noexiste = document.getElementById("noexiste");
console.log(noexiste); //Dará null de este modo

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = "Este es el nuevo título";

/*document.getElementsByTagName("etiqueta")
    Devolver un HTMLCollection, es similar a un array
    podemos reccorerlo con for of
    podemos acceder con índices lis[0]...
*/
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log((lis[0]).innerHTML);
console.log((lis[1]).innerHTML);
console.log((lis[2]).innerHTML);
for(let li of lis){
    console.log(li.innerHTML);
}

/*document.getElementsByClassName("clase")
    Devolver un HTMLCollection
*/
const p1 = document.getElementsByClassName("p1");
console.log(p1);
console.log(p1.length); //2 longitud
for(let p of p1){
    console.log(p.innerHTML);
}

//modificar el contenido de los párrafos
p1[0].innerHTML = "Estoy cambiando el contenido";
p1[1].innerHTML = "Más cosas que cambio";

/*document.querySelector("selector")
    selecciona el primer objeto que cumple con un selector

    document.querySelectorAll("selector")
    selecciona todos los objetos que cumplen con un selector
    Devuelve un NodeList - similar a un array pero tampoco es como HTMLCollection
*/

const li3 = document.querySelector("li#item3");
console.log(li3);
li3.innerHTML = "MODIFICADO";

const lies = document.querySelectorAll("li");
console.log(lies); //Sale la lista entera de NodeList
lies.forEach(li => {
    console.log(li.innerHTML); //imprimirá el contenido
});

/*
    Diferencia entre HTMLCollection y NodeList:

    HTMLCollection tiene métodos relacionados con elementos HTML como:
        document.getElementsByClassName()
        document.getElementsByTagName()
    No tiene métodos relacioandos con iteración como forEach()

    NodeList tiene métodos como:
        document.querySelectorAll()
    Incluye forEach()
*/

/*Cómo cambiar contenido HTML
    innerHTML: accede / modifica todo lo que está dentro de un elementos html, texto, otras etiquetas...
    innerText:
    TextContent:
*/

const subtitulo = document.getElementById("subtitulo");
console.log(subtitulo.innerHTML); //nos aparecería todo pero las etiquetas HTML que están dentro de subtitulo aparecían como tal (<strong>blablabla</strong>, etc)
console.log(subtitulo.innerText); //nos aparecería todo el texto, incluyendo las etiquetas de dentro
subtitulo.innerHTML = "Esto <i>es</i> un subtitulo";
console.log(subtitulo);
console.log(subtitulo.textContent); //nos aparecería el texto como tal pero las etiquetas HTML de dentro de subtitulo las ignora

/*CÓMO ACCEDER A UN ATRIBUTO?*/
const enlace = document.getElementsByTagName("a");
console.log(enlace); //nos aparecerá el HTMLCollection
enlace[0].title = "Enlace a Google"; //así cambiamos el titulo del enlace
console.log(enlace[0].title);

/*CAMBIAR ESTILOS CSS CON JAVASCRIPT
    background-color - backgroundColor
    font-size - fontSize*/
titulo.style.backgroundColor = "red";
subtitulo.style.color = "pink";
subtitulo.style.backgroundColor = "blue";