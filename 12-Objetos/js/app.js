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


const fruta = {
    nombre: "Pera",
    tipo: "Conferencia",
    precio:2.95,
    descuento: true,
    info: function(){
        return `la fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
    },
    precioDescuento: function(){
        if(this.descuento=true){
            return this.precio - 0.5;
        }
    },
    actualizarPrecio: function(nuevoprecio){
        this.precio = nuevoprecio;
    }
}


console.table(fruta);
//añadir propiedades a un objeto
fruta.color = "Verde";

//añadir métodos a un objeto
//nombreObjeto.nombreMétodo = function(){ //instrucciones }
//Añade un método que compare dos frutas y devuelva una cadena indicando cuál es la fruta que menos vale

fruta.compararPrecio = function(nuevaFruta){
    if(this.precio>nuevaFruta.precio){
        return `La fruta más barata es ${nuevaFruta.nombre}`;
    }else if(this.precio<nuevaFruta.precio){
        return `La fruta más barata es ${this.nombre}`;
    }else{
        return `La fruta ${this.nombre} tiene el mismo precio que la fruta ${nuevaFruta.nombre}`;
    }
};

//llamadas a los métodos
console.log(fruta.info());
console.log(`El precio con descuento es: ${fruta.precioDescuento()}`); //tiene que ser con paréntesis, si no sale la información del método entera

const fruta2 = {
    nombre: "Manzana",
    tipo: "Golden",
    precio:2.20,
    descuento: true,
    info: function(){
        return `la fruta ${this.nombre} de tipo ${this.tipo} tiene un precio de ${this.precio}`;
    },
    precioDescuento: function(){
        if(this.descuento=true){
            return this.precio - 0.5;
        }
    },
    actualizarPrecio: function(nuevoprecio){
        this.precio = nuevoprecio;
    }
}

console.log(fruta.compararPrecio(fruta2));
//console.log(fruta2.compararPrecio(fruta)); error porque el método pertenece al objeto fruta, no al objeto fruta2

//eliminar propiedad o métodos
//delete nombreObjeto.nombrePropiedad
//delete nombreObjeto.nombreMétodo

//VISUALIZAR un objeto
console.log(fruta.nombre);

//for..in   for..of -> no funciona, el objeto no es iterable directamente

for(let i in fruta){
    if(typeof fruta[i]!=='function'){
        console.log(fruta[i]); //NO es fruta.i
    }
}

//Métodos: Object.values(), Object.keys(), Object.entries()
//Cada uno de ellos devuelve un array, con los valores del objetos, con las claves del objeto,
//y con los pares clave-valor del objeto

for(let i in Object.values(fruta)){
    console.log(fruta[i]);
}

//const array_valores = Object.values(fruta);
//console.log(array_valores);
for (let valor of Object.entries(fruta)){
    if(typeof valor !== 'function'){
        console.log(valor);
    }
}

for (let [clave, valor] of Object.entries(fruta)){
    if(typeof valor !== 'function'){
        console.log(`La clave es ${clave} y el valor es ${valor}`);
    }
}

//Convertir un objeto a cadena en formato JSON para por ejemplo guardar en un archivo o almacenamiento local
//localStorage, sessionStorage
const cadenaObjeto = JSON.stringify(fruta);
console.log(cadenaObjeto);
