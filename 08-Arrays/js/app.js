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