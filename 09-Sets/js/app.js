/*
    Set
    Similar a un array, es un tipo de objeto
    Colecciones de datos que pueden ser de cualquier tipo, datos primitivos, objetos
    En el array puede haber datos duplicados, en los conjuntos set NO!!
    Pueden tener valores vacíos y undefined pero no duplicados
    No tienen índice numérico como los arrays, no se pueden listar los elementos ni acceder a un elemento en concreto, los elementos ocupan la posición en la que se añaden
*/

//Crear un set
const conjunto = new Set(); //crear un set vacío
//añadir elementos. conjunto.add(valor);
conjunto.add("hola");
conjunto.add("adiós");
conjunto.add("adiós"); //no se insertará porque no permite valores repetidos!!!
console.log(conjunto);

console.log(conjunto[0]); //undefined
console.log(conjunto[1]); //undefined

//crear pasándole un array
const conjunto2 = new Set(["a", "b", "a", "d"]); //La segunda a no la añade, la omite al estar duplicada
console.log(conjunto2);

const array = [1,3,5,3,4,5]; //array con duplicados
const conjArray = new Set(array); //Así nos ayuda a eliminar duplicados de un array
console.log(conjArray); //Pero ahora no sería ya un array, con lo que debemos convertirlo a array otra vez
//convertir el set a array nuevamente
const arraySinDup = [...conjArray];
console.log(arraySinDup);

//OPERADORES DE TIPO: typeof, instanceOf
console.log(typeof conjunto); //Object //Cuál es el tipo de dato de conjunto?
console.log(conjunto instanceof Object); //true //Es conjunto instancia de un objeto?
console.log(conjunto instanceof Set); //true //Es conjunto una instancia de un conjunto?

//MÉTODOS Y PROPIEDADES de los Set
//size: retorna el número de elementos (únicos) del set
console.log(conjunto.size);
//add: inserta un nuevo elemento con un valor específico en el set, si no hay ya un elemento del mismo valor en el set
console.log(conjunto.add("buenos días"));
//delete: Borra un valor específico del set, si está o no. Devuelve true en este caso
console.log(conjunto.delete("hola"));
console.log(conjunto);
//has: Retorna un booleano indicando si un elemento con un valor específico existe en el set o no
console.log(conjunto.has("adiós"));