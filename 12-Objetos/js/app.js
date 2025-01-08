/*
Objeto: estructura de datos que guarda propiedades (para clave-valor) y métodos que
son funciones almacenadas como propiedades.
Diferencias con Map:
    Las claves en el Map podían ser cualquier cosa, en los objetos son cadenas o símbolos,
    si ponemos otra cosa se autoconvierte en cadena
    Orden de inserción si usamos cadenas como claves es el orden de la propia inserción
    En el map hay métodos específicos como set, get, size y en el object no
*/

//cómo crearlo. 1 forma usando literales
const coche = {
    marca: "Citroen",
    modelo: "Xsara",
    color: "Rojo",
    anho: 2025,
    extras: ["Antiniebla", "Sensor Aparcamiento"]
}

//2 forma, creando el objeto vacío y añadiendo las propiedades
const coche1 = {};
// nombreObjeto.nombrePropiedad = valor;
coche1.marca = "Renault";
coche1.modelo = "Kangoo";
coche1.color = "Blanco";
coche1.anho = 2020;
coche1.extras = ["Navegador"];

//3 forma. No la vamos a usar es con new
const coche2 = new Object();
//añado las propiedades de la misma forma que la anterior

//Añadir propiedad a un objeto
//nombreObjeto.nombrePropiedad = valor;
coche.consumo = 10;
coche.anho = 2024;

console.table(coche);
console.table(coche1);

//eliminar propiedades
//delete nombreObjeto.nombrePropiedad
delete coche.anho;
console.log(coche.anho); //cuando accedo a una propiedad que no existe undefined
console.log(`El coche ${coche.marca} con modelo ${coche.modelo} tiene un consumo de ${coche.consumo} y uno de sus extras es ${coche.extras[0]}`);

//objetos anidados
const animal = {
    nombre: "Lucas",
    tipo: "Pato",
    color: "Marrón",
    veterinario:{
        nombre: "Pepe",
        apellidos: "López López",
        edad: 40
    }
}

animal.edad = 2;
animal.veterinario.carnet = true;
console.table(animal);

//Visualizar objetos
//1 forma es accediendo a cada propiedad de forma individual nombreObjeto.nombrePropiedad
console.log(animal.tipo);

//bucle for..in for..of
for(let i in animal){
    console.log(animal[i]) //animal.i
}

/*
for(let i of animal){
    console.log(i); //El objeto no es directamente iterable
}
*/

console.log("otra forma de acceder");
//otra forma de acceder a las propiedades son iguales
console.log(animal["nombre"]);
console.log(animal["veterinario"]["nombre"]);
console.log(animal.nombre);

//operadores de tipo; typeof, instanceof
console.log(typeof animal); //Object


//El objeto puede tener métodos: funciones que se almacenan coomo propiedades
//Tengo que crear un objeto con un par de métodos y saber cómo se crean y cómo se acceden a ellos
//y cómo se borran

const ropa1 = {};

ropa1.nombre = "Chaqueta";
ropa1.marca = "Louis Vouiton";
ropa1.color = "Negro";
ropa1.talla = 38;

const ropa2 = {
    nombre:"Pantalón",
    marca:"Nike",
    color:"Verde",
    talla:40



}

nombresPrendas = function() {
    console.log(`Hola, esta chaqueta es ${ropa1.nombre} de la marca ${ropa1.marca}.`);
};



/*
const coche = {
    marca: "Citroen",
    modelo: "Xsara",
    color: "Rojo",
    anho: 2025,
    extras: ["Antiniebla", "Sensor Aparcamiento"]
}
*/

//Métodos
const coche3 = {
    marca:"Citroen",
    modelo:"Xsara",
    color:"Rojo",
    anho:2025,
    extras:["Antiniebla", "Sensor Aparcamiento"],
    info: function(){
        return `El coche es un ${this.marca} su modelo es ${this.modelo}, su color es ${this.color}, y tiene
        estos extras: ${this.extras[0]}, ${this.extras[1]}`;
    }
}