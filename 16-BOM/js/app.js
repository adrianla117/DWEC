/*
    El DOM es el modelo de objetos que el navegador crea para enlazar con Javascript y
    permitir a este acceder a los elementos de las páginas web.

    Sin embargo, el documento web se presenta dentro de una ventana del
    navegador. Esta ventana también está abierta a Javascript mediante lo
    que se ha llamado BOM (Browser Model Object). Está jerárquicamente
    por encima de todo en la ventana de visualización. Su raíz es el
    objeto global window.
*/



function  prueba(){
    
    return this
};

let padre = prueba();
console.log(padre);//Window

padre = window.prueba()
console.log(padre);//Window

console.log(window.innerWidth); //es el ancho de la ventana del navegador en pixeles
console.log(window.innerHeight); //es la altura de la ventana del navegador en pixeles
//si lo miramos en la consola, al agrandarlo/empequeñecerlo tenemos que recargar la página
//para que aparezca el nuevo ancho/altura

document.getElementById("miBoton").addEventListener("click", bomAncho);

function bomAncho(){
    if(window.innerWidth>776){
        window.open("https://es.wikipedia.org/wiki/Vigo", "_blank"); 

    }
}
//así, la pantalla al tener más de 776px de ancho, si clickamos en el boton se nos abrirá una ventana



document.getElementById("miBoton2").addEventListener("click", bomTamaño);

function bomTamaño(){
    if(window.innerWidth<450){
        let nuevaVentana = window.open("", "", "width=400,height=400");
        //si abrimos una url externa ("https://es.wikipedia.org/wiki/Vigo") no podremos cambiar su tamaño con resizeTo()
        //debido a restricciones de seguridad del navegador
        //con "", "" abrimos una pestaña en blanco, y debemos siempre darle un tamaño para que funcione

        if(nuevaVentana){
            nuevaVentana.resizeTo(1650, 200); //aquí le damos el tamaño
        }
    }
}


//También hay otros métodos como:

// - window.close() cierra una ventana
// - window.moveTo() mueve una ventana

//Hay otras propiedades en el BOM como el window screen que es para la pantalla
//window.location que para tema URL, hostname, etc
//window.history que es para el historial y para moverse entre ventanas del navegador
//window.navigator que es para la información sobre el navegador del usuario
//(puedes saber si las cookies están activas, cómo se llama tu navegador, el código, etc)