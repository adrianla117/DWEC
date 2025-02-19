
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
    /*console.log("Entro en añadir curso");
    console.log(e.type);
    console.log(e.target);*/

    let cursoSeleccionado = e.target; //guardamos en la constante el elemento en que hicimos click (en este caso <a>)

    while(!cursoSeleccionado.classList.contains("card")){ //buscamos el primer ancestro (padre) más cercano que sea class="card" para encontrar la info del curso (devuelve true o false)
        //queremos encontrar card para tener la imagen, el titulo y el precio
        cursoSeleccionado = cursoSeleccionado.parentNode; //gracias a parentNode vamos subiendo en el DOM hasta encontrar el que tenga "card" y ahí salimos del bucle
    }

    const imagen = cursoSeleccionado.querySelector("img").src; //encontramos la primera imagen del curso (estamos en el padre <div class="card">) y obtenemos su src.
    //En este caso cogemos la imagen del curso y no la de las estrellas porque están más adelante
    const nombre = cursoSeleccionado.querySelector("h4").textContent; //encontramos el h4 del y obtenemos el contenido con textContent
    const precio = cursoSeleccionado.querySelector(".precio span").textContent; //idem
    const id = e.target.getAttribute("data-id"); //así obtenemos el valor del atributo "data-id" del boton

    const curso = { //creamos un objeto con la informacion del curso que vamos a agregar al carrito
        id,
        imagen,
        nombre,
        precio,
        cantidad: 1,
    };

    const existe = articulosCarrito.some((curso) => curso.id === id); //si existe un curso con ese mismo id que guardamos antes, guardamos en esta variable un booleano
    //con some recorremos articulosCarrito (es donde guardamos los cursos que añadimos) y verificamos si existe uno con ese id
    if(existe){

        articulosCarrito = articulosCarrito.map((curso) => { //recorremos articulosCarrito con .map, creando un nuevo array
            if(curso.id === id){
                curso.cantidad++; //si el curso tiene el mismo id aumentamos la cantidad
            }
            return curso; //devolvemos el curso actualizado para que el array no pierda los elementos, ya que si no aparecerian como undefined
        });
    }else{

        articulosCarrito.push(curso); //si no existe lo agregamos aqui
    }

    actualizarCarrito(); //llamamos a la funcion actualizarCarrito para hacer los cambios en el carrito
}



function actualizarCarrito() {
    
    contenidoCarrito.innerHTML = ""; //limpiamos el carrito antes de actualizarlo. Asi evitamos duplicar elementos cada vez que agregamos un curso.
    //cada vez que agregaramos un curso se sumarian los elementos sin eliminar anteriores. Se crearian varias filas para el mismo curso en sí

    articulosCarrito.forEach((curso) => { //recorremos el array del carrito (cada curso)
        const fila = document.createElement("tr");  //creamos una nueva fila en la tabla para cada curso
        fila.innerHTML = ` 
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `; //aqui vamos guardando en fila (<tr>) cada fila con sus <td> en el carrito, generando el html
        //en la imagen le damos un width para que no sea tan grande y entre
        //al final creamos un enlace para poder eliminar el curso. Le ponemos data-id con la id del curso que creamos antes para saber cual eliminar cuando se haga click aqui

        contenidoCarrito.appendChild(fila); //como definimos al principio, contenidoCarrito es el <tbody> donde se insertan las filas
        //asi agregamos la fila creada al tbody, mostrándola en la tabla
    });

    document.querySelectorAll(".borrar-curso").forEach((btn) => { //se le asigna a los enlace <a> que creamos antes (que tienen la class="borrar-curso") el siguiente evento
        btn.addEventListener("click", eliminarCurso); //creamos un addEventListener para que al hacer click en la X se active la funcion eliminarCurso que está abajo
    });
}



function eliminarCurso(e) {
    
    const id = e.target.getAttribute("data-id"); //obtenemos el valor del "data-id" del curso que vamos a eliminar

    // Filtrar el array para eliminar el curso
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== id); //filtramos los cursos para crear un nuevo array sin el curso que tiene el id seleccionado antes (id)
    //así borramos el curso que queremos borrar

    actualizarCarrito(); //volvemos a actualizar el carrito
}