/*
    Map
    Objeto que permite guardar colecciones de datos
    Los datos se guardan como pares clave valor
    La clave y el valor pueden ser de cualquier tipo; datos primitivos, objetos
    Las claves no se pueden repetir, el valor sí
*/
//Creación
const ropa = new Map(); //vacío
//añadir elementos mapa.set(clave, valor);
ropa.set("camisa", 35.95);
ropa.set("pantalón", 45.95);
ropa.set("camisa", 25.95); //si se repite, lo reescribe
ropa.set("pijama", 15.95);
console.log(ropa);

const motos = new Map([
    ["Yamaha", "naranja"],
    ["Honda", "azul"],
    ["Kawasaki", "naranja"]
])
console.log(motos);

//OPERADOR DE TIPOS: typeof, instanceof
console.log(typeof ropa); //object
console.log(ropa instanceof Object); //true
console.log(ropa instanceof Map); //true

//MÉTODOS Y PROPIEDADES
//mapa.size
console.log(ropa.size);

//mapa.set(clave, valor): Almacena el valor asociado a la clave. La clave es la llave del elemento que se va agregar al objeto map. El valor  es el valor del elemento que se va agregar al objeto map.
//mapa.clear(): Elimina todo el map

//mapa.delete(): Elimina el elemento con esa clave
ropa.delete("camisa"); //true //No deja el hueco del elemento eliminado
console.log(ropa);
console.log(ropa.delete("fsfsffs")); //false

//mapa.get(): Devuelve el valor asociado a la clave. Será undefined si la clave no existe en map
console.log(ropa.get("pantalón")); //el valor
console.log(ropa.get("ffsrgg")); //undefined

//mapa.has(clave)
console.log(ropa.has("pantalón")); //true
console.log(ropa.has("ffsrgg")); //false

//MOSTRAR EL MAPA
//keys()
for (let claves of ropa.keys()){
    console.log(claves);
}

//values()
for (let valores of ropa.values()){
    console.log(valores);
}

//entries()
for (let [clave, valor] of ropa.entries()){
    console.log(`La clave es ${clave} el valor es ${valor}`);
}

//El mapa está muy bien para calcular la frecuencia de algo en una cadena, en el mapa, etc.. Por ejemplo cuántas veces sale un número en 1000 números random
