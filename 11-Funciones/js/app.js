/*FUNCIÓN

    function nombre_funcion(p1, p2, p3){
        //instrucciones;
    }
*/

saludar();//si invocamos la función antes de haya sido declarada, también funcionaría porque javascript eleva la función al inicio

function saludar(){
    console.log("Hola qué tal");
}
//hoisting / elevación: cuando definimos las funciones de una manera básica (como la anterior) la invocaríamos así:*/
saludar();

function saludar2(mensaje, para = "usuari@"){ //mensaje y para aquí son parámetros //para aquí hacemos que tenga un valor por defecto
    return `Mensaje: ${mensaje}. Para: ${para}`;
}
console.log(saludar2("Hola muy buenas", "Adrián")); //mensaje y para aquí son argumentos

//Si tiene más argumentos que parámetros, coge solo los necesarios (los primeros, por orden), los demás los omite
console.log(saludar2("Hola muy buenas", "Adrián", "No sé"));

//Si tiene menos parámetros de los que necesita, los pone como undefined (los que están sin cubrir)
console.log(saludar2("Hola muy buenas"));

//Para controlar el parámetro undefined:
/*function saludar2(mensaje, para){
    console.log("Hola qué tal");
    if (para ===undefined){
        para = "usuari@";
    }
    return `Mensaje: ${mensaje}. Para: ${para}`;
}*/


//typeof
console.log(typeof saludar2); //function
console.log(typeof saludar2()); //string
console.log(saludar2()); //con los () invocas a la función
console.log(saludar2); //muestra la creación

//Función que cuente el número de números pares de un array cuentaPares(array)
//comprobar que el parámetro es un array. sms no puedo contar pares porque no es array
//comprobar que tiene números. Si es par sumáis, si es impar no sumáis. El número de pares es ...


function cuentaPares(array){
    let j = 0;
    let c = 0;
    let ejemploArray = [];

    if (Array.isArray(ejemploArray)) {
        console.log("Es un array");
    } else {
        console.log("No es un array");
    }

    while (ejemploArray.length < 5) {
        const numNuevo = Math.floor((Math.random() * 5) + 1);
        ejemploArray.push(numNuevo);
        if (numNuevo % 2 === 0) {
            c++;
        }
        j++;
    }

    console.log(ejemploArray);
    console.log("Número total de pares: ", c);
}

cuentaPares();


//ASIGNAR FUNCIONES A VARIABLES. Funciones anónimas, no tienen propiedad hoisting
//console.log(doble(4)); //no hoisting
const doble = function(x){
    return 2*x;
};
console.log(doble(4)); //llamada a la función con la variable


//ARROW FUNCTIONS: eliminar function, llaves, return
//nos permiten omitir la palabra function, el return y las llaves{}
//se utilizan para funciones sencillas, con poco código
//no tienen propiedad hoisting
const doble2 = x => 2*x;

//MÉTODO FOREACH
/*Permite iterar sobre elementos de array, set, map
No devuelve un nuevo array, no modifica el array original
No puedo parar el ciclo de iteración con break, continue.
No devuelve return

Sintaxis:

array.forEach(function(elemento,indice,array){
    //instrucciones;
});

El elemento es en el que está iterando en cada iteración.
indice y array son opcionales.
*/

const desayunos = ["yogurt", "petisuis", "rollo canela"];
desayunos.forEach(function(elemento){
    console.log(elemento);
});

//arrow function
desayunos.forEach(d => console.log(d));



//forEach en conjuntos set
const conjunto = new Set(["hola", "adios", "bye"]);
conjunto.forEach(function(saludo){
        console.log(saludo);
});

//lo mismo pero con arrow function
conjunto.forEach(s => console.log(s));



//forEach en map
const mapa = new Map([
    [1, "hola"],
    [2, "adios"],
    [3, "bye"]
]);

mapa.forEach(function(elemento, indice){
    console.log(`Índice: ${indice} Elemento: ${elemento}`);
});

//lo mismo pero con arrow function
mapa.forEach((e, i) => console.log(`Índice: ${i} Elemento: ${e}`));



//Crear array con edades de alumnos, con foreach realizamos el conteo de los mayores de edad
const edades = [20, 14, 16, 25, 55];

function mayoresEdad(array){
    let num = 0;

    array.forEach(function(e){
        if(e>=18){
            num++;
        }
    });

    return num;
}

console.log(mayoresEdad(edades));

//Con arrow function:
function mayoresEdad(array){
    let num = 0;

    array.forEach(edad => {
        if(edad>=18){
            num++;
        }
    });

    return num;
}

console.log(mayoresEdad(edades));



//Crear array con notas y relizáis la media
const notas = [8, 10, 5, 3, 6];

function mediaNotas(array){
    let nota = 0;
    let num = 0;
    let media = 0;

    array.forEach(function(e){
        nota = e + nota;
        num++;
    });

    return media = nota/num;
}

console.log(mediaNotas(notas));

//Con arrow function:
function mediaNotas(array){
    let nota = 0;
    let num = 0;
    let media = 0;

    array.forEach(notillas => {
        nota = notillas + nota;
        num++;
    });

    return media = nota/num;
}

console.log(mediaNotas(notas));


//MAP
/*
Itera sobre los elementos del array
Devuelve un nuevo array
No modifica el original
No podemos parar el ciclo de iteración

Sintaxis:
const nuevoArray = array.map(function(elemento, indice, array){
    //instrucciones;
});

//el indice y el array son opcionales
*/

//Consigue un nuevo array con los elementos pares
const numeros2 = [1,2,3,4,5,6,7];

const arrayPares = numeros2.map(function(pares, i){
    if(pares%2!==0){
        numeros2.splice(i,1);
    }
});

console.log(numeros2);


//Consigue nuevo array con las palabras de más de 4 letras
const palabras = ["luna", "sol", "cielo", "estrellas"];


 const numeros = [2, 3, 4, 1];
 const dobles = numeros.map(num => num*2);
 console.log(dobles);

 const palabras2 = ["mesa", "silla", "ordenador", "tomcat9"];
 const lonPalabras2 = palabras2.map(palabra=>palabra.length);
 console.log(lonPalabras2);


 /*FILTER
 Recorre todos los elementos de un array les aplica una función y si cumplen la condición aplicada el array se filtra.
 Puede devolver un array de igual longitud o de menor longitud que el original
 Si ningún elemento cumple la condición devuelve un array vacío

 const nuevoArray = array.filter(function(elemento, indice, array){
    //instrucciones
 })

 */

 //pares
const pares = numeros.filter(function(num){
    return (num % 2 === 0); //así solo devuelve los pares
})
console.log(pares);

//Con arrow function sería:
//const pares = numeros.filter(num => num % 2 === 0);
//console.log(pares);


 //palabras de más de 6 letras
 const palabrasLargas = palabras2.filter(function(palabra){
    return (palabra.length>6);
 })
console.log(palabrasLargas);

//Con arrow function sería:
//const palabrasLargas = palabras2.filter(palabra => palabra.length>6);
//console.log(palabrasLargas);


/*función tradicional a la que se le pase un array y una letra y devuelva un array
con las palabras que incluyan la letra indicada*/
const letra = "a";
const arrayPalabras = ["mesa", "libro", "casa", "hamaca", "hija"];

function palabrasConLetra(array, letra){
    array.filter(function(palabra){
        return palabra.toLowerCase().includes(letra.toLoweCase());
    })
}

//Con arrow function sería:
//function palabrasConLetra(array,letra){
//const arrayFiltrado = array.filter(palabras=>palabra.toLoweCase().includes(letra.toLoweCase()));
//}
//console.log(palabrasConletra);