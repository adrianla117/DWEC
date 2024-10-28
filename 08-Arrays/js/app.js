//ARRAYS
/*
    Es un tipo de objeto
    Permite almacenar varios datos
    Puede almacenar String, number, boolean, objetos (math, date, array)...
    Es una estructura dinámica no hay que indicar su tamaño en la creación
    Es heterogénea, puede contener diversos tipos de datos
    Tiene un índice numérico que empieza en 0 y vale para acceder a sus valores
    */
//CREACIÓN
const colores = ["Verde", "Rojo", "Azul"];
const colores1 = []; //creo array vacío
//y a continuación inserto datos
colores[0] = "Verde";
colores[1] = "Rojo";
colores[2] = "Azul";

const colores2 = new Array("Verde", "Rojo", "Azul"); //no usar!!!

//OPERADOR DE TIPO: typeof, instanceOf
console.log(typeof colores);
console.log(typeof colores1);
console.log(typeof colores2);
console.log(colores instanceof Object); //true. Si colores es un objeto devuelve true
console.log(colores instanceof Array); //true. Si es una instancia de un array
console.log(Array.isArray(colores)); //true.Si es un array devuelve true

//Array con datos de distintos tipos
let cierto = true;
let fecha = new Date();
const arrayConTodo = [2, "hola", cierto, Math.PI, fecha.getFullYear(), "Pepe", 30, 6894567845];

//MOSTRAR ARRAY
console.log(arrayConTodo);
console.log(colores);
console.table(colores);
console.table(arrayConTodo);
//alert(colores);
//alert(arrayConTodo); //salen todos los datos de seguido en la ventana de entrada
//document.write(colores); //Escribe el contenido del array al final del contenido del flujo del html

//Propiedad de array: array.length
for (let i = 0; i<arrayConTodo.length; i++){
    console.log(colores[i]);
}

//Variantes del for; for.. in, for.. of
const frutas = ["Naranja", , "Limón", , "Melón"]; //puedo crear un array con valores vacíos
console.table(frutas);

//array.toString() Visualiza el array con una cadena separada por comas
console.log(frutas.toString());
for (let i = 0; i<frutas.length; i++){
    if (frutas[i] !== undefined){
        console.log(frutas[i]);
    }
}

//for.. in no me muestra los undefined, los omite (no los elimina)
/*
    for (let indice in nombreArray){
        nombreArray[indice];
    }
*/
for (let indice in frutas){
    console.log(frutas[indice]);
}

//const frutas = ["Naranja", , "Limón", , "Melón"];
//for.. of(sí que imprime los undefined)
for (let valor of frutas){
    if (valor !== undefined){
        console.log(valor);
    }
}
//Con el in accedo a la posición(índice) con el of accedo al propio valor

/*La referencia al array no cambia por eso se declara const pero el contenido sí puede cambiar*/
const mismasFrutas = frutas; /*Esto no es una copia, es una asignación*/
mismasFrutas[1] = "Pera";
console.log(frutas);

//PROPIEDADES array.length
console.log(frutas.length);

//MÉTODOS
//Añadir elementos a un array (podemos añadir al final o al inicio): array.push(), array.unshift()
frutas.push("Kaki"); //final
frutas.unshift("Pomelo");//inicio
console.log(frutas);

//Borrar elementos delete(array[indice]) deja huecos!!
delete(frutas[3]);
console.log(frutas);

//Extraer elementos
//array.pop() extraer del final. No deja hueco!!
//array.shift() para extraer del inicio. No deja hueco!!
let frutasFinal = frutas.pop();
console.log(frutasFinal);
console.log(frutas);
let frutasInicio = frutas.shift();
console.log(frutasInicio);
console.log(frutas);

//array.slice(ini, fin): extrae parte de un array. El fin no está incluido. No modifica el array original, por lo que hay que crear una variable
let extraido = frutas.slice(0,2);
console.log(extraido);

//array.splice(ini, cantidad, elemento, elemento): Los elementos son opcionales, puedes añadir o no elementos.
frutas.splice(2,2,"Pomelo","Kaki","Kiwi");
console.log(frutas);

//MÉTODO para transformar array a cadena
//array.toString() separada por comas
//array.join("separador") separada por un separador
console.log(frutas.toString());
console.log(frutas.join("-"));

let cadenaFrutas = "";
for(let i in frutas){
    cadenaFrutas += frutas[i]+" ";
}
console.log(cadenaFrutas);

//MÉTODOS para buscar elementos de los arrays
//indexOf(elemento): devuelve el primer índice donde se encuentra el elemento, -1 no encuentra
//lastIndexOf(elemento): devuelve el último índice donde se encuentra el elemento, -1 no encuentra
//includes() true/false si encuentra el elemento
console.log(frutas.indexOf("Pera"));
console.log(frutas.indexOf("sdfdsf"));
console.log(frutas.includes("Pera")); //true

const numeros = [1, 4, 1, 5, 6, 1];
console.log(numeros.lastIndexOf(1));

/*filter, map, some, every, find... métodos de arrays pero que usan una función*/

//concat, reverse, toReversed, sort
const diasTrabajo = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const diasRelax = ["Sábado", "Domingo"];

//array.concat(array2): une arrays
const diasSemana = diasTrabajo.concat(diasRelax);
console.log(diasSemana);

//array.reverse(): invierte el array. Cambia el array original, es destructivo
const diasSemanaInvertido = diasSemana.reverse();
console.log(diasSemanaInvertido);

//array.sort(): ordena el valor dependiendo del valor Unicode de cada elemento
diasSemana.sort();
console.log(diasSemana);

//Desesctructuración de Arrays
const bebidas = ["Agua", "Café", "Vino", ,"Cerveza"];
let [b1, b2, b3, b4, b5] = bebidas;
/*let b1 = bebidas[0];*/
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

let [be1, be2, be3, ,be5] = bebidas;
console.log(be1);
console.log(be2);
console.log(be3);
console.log(be5);

//OPERADOR DE EXPANSIÓN, PROPAGACIÓN spread (...)
const bebidas2 = bebidas; /*esto no es hacer una copia del array*/
bebidas2[3] = "Nestea"; /*este cambio sucede en bebidas2 y bebidas*/
console.log(bebidas);
console.log(bebidas2);

const bebidas3 = [...bebidas]; /*esto sí es una copia*/
console.log(bebidas3);
bebidas3[3] = "Fanta";
console.log(bebidas3);
console.log(bebidas);

let [beb1, beb2, ...otrasBebidas] = bebidas;
console.log(otrasBebidas);

//VISUALIZA UN ARRAY
//for.. in /*no imprime undefined y accede a los índices, no accede al valor*/
for (let i in bebidas){
    console.log(bebidas[i]);
}

//for.. of /*imprimer undefined y accede al valor*/
for (let valor of bebidas){
    console.log(valor);
}

//Métodos values(), keys(), entries()
//array.values() accede a los valores del array y devuelve un array con todos los valores
//array.keys() accede a las claves de los array y devuelve un array con todas las claves (índices)
//array.entries() accede al par (clave, valor) y devuelve un array con todos los pares clave valor
console.table(bebidas);
const bebidasValores = bebidas.values();
console.log([...bebidasValores]);

for (let valor of bebidas.values()){
    console.log(valor);
}

for (let claves of bebidas.keys()){
    console.log(claves);
}

for (let [clave, valor] of bebidas.entries()){
    console.log(`La clave es ${clave} y el valor es ${valor}`);
}

const listaNumeros = [2, 69, 99, 1, 0];
//el número mayor de este array
var mayorNum = 0;
for (let [clave, valor] of listaNumeros.entries()){
    if (valor > listaNumeros[clave+1]){
        mayorNum = valor;
    }
}
console.log(`el valor es ${mayorNum}`) //ESTÁ MAL :(