
//Referencias a elementos:
const iconoCarrito = document.getElementById("acarrito");
const carrito = document.getElementById("carrito");
//console.log(iconoCarrito); //así comprobamos que funciona mirando en la consola
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
//console.log(vaciarCarritoBtn);
const contenidoCarrito = document.querySelector("#lista-carrito tbody");
//console.log(contenedorCarrito);
const btnsAñadirCurso = document.querySelectorAll(".info-card a.boton");
//console.log(btnsAñadirCurso);
let articulosCarrito = [];
const imagenCurso = document.querySelectorAll(".card > img");
console.log(imagenCurso);
const listaCarrito = document.querySelectorAll("#lista-carrito thead tr th")[0];
console.log(listaCarrito);

//addEventListener:
iconoCarrito.addEventListener("click", mostrarCarrito);
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
for(let b of btnsAñadirCurso){
    b.addEventListener("click", añadirCurso); //aquí le damos a cada curso un addEventListener
}

//Funciones:
function mostrarCarrito(){
    //console.log("Entro en mostrar carrito"); comprobamos que funciona
    //console.log(carrito.classList.contains("mostrar")); //daría false al hacer click
    if(carrito.classList.contains("mostrar")){ //inicialmente el carrito no se muestra (display: none). Hay una clase mostrar en el css que hace que se muestre (display: block). La utilizamos aquí entonces
        carrito.classList.remove("mostrar");
    }else{
        carrito.classList.add("mostrar");
    }
}

function vaciarCarrito(){
    //console.log("Entro en vaciar carrito"); comprobamos que funciona
    //console.log(contenidoCarrito);
    articulosCarrito = []; //vacío el array de artículos
    contenidoCarrito.innerHTML = ""; //vacío el contenido del tbody
}

function añadirCurso(e){
    console.log("Entro en añadir curso");
    console.log(e.type);
    console.log(e.target);
}

