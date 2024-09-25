//VARIABLES var, let, const
//redeclarar
var cosa = "mesa";
var cosa = "silla"; //ok
console.log(cosa);

let cosa2 = "mesa";
//let cosa2 = "silla"; Uncaught SyntaxError: redeclaration of let cosa2
console.log(cosa2);

const COSA3 = "mesa";
//const COSA2 = "silla"; Uncaught SyntaxError: redeclaration of const cosa3

//reasignar: var ok, let ok, const no
var asunto = "variables";
console.log(asunto); //variables
asunto = "otro tema";
console.log(asunto); //otro tema

let asunto2 = "variables";
console.log(asunto2); //variables
asunto = "otro tema";
console.log(asunto2); //otro tema

const ASUNTO3 = "variables";
console.log(ASUNTO3); //variables
//ASUNTO3 = "otro tema"; Uncaught TypeError: invalid assignment to const 'ASUNTO3'
//console.log(ASUNTO3);

//Declaración sin asignar valor: var ok, let ok, const no
var sinvalor;
let sinvalor2;
//const sinvalor3; error tiene que darse un valor al declarar

//ÁMBITO DE LAS VARIABLES: alcance, desde dónde es accesible una variable
/*
    global: todo el documento
    función: dentro de la función
    bloque: {} dentro del bloque
*/

//ámbito de var: global
//creo un bloque
{
    var variable1 = "hola";
    console.log(variable1); //hola
}
console.log(variable1); //nada

//ámbito let: bloque, no puede ser accedido desde fuera del bloque!!!
{
    var variable2 = "hola";
    console.log(variable2); //hola
}
//console.log(variable2); //Uncaught ReferenceError: variable2 is not defined

//ámbito const: bloques
{
    var variable3 = "hola";
    console.log(variable3); //hola
}
//console.log(variable3); //Uncaught ReferenceError: variable3 is not defined



//LO PROBAMOS AL REVÉS

//var
var prenda = "camisa";
console.log(prenda); //camisa
{
    var prenda = "pantalón";
    console.log(prenda); //pantalón
}
console.log(prenda); //pantalón

//let
let prenda2 = "camisa";
console.log(prenda2); //camisa
{
    let prenda2 = "pantalón";
    console.log(prenda2); //pantalón
}
console.log(prenda2); //camisa

//const
const prenda3 = "camisa";
console.log(prenda3); //camisa
{
    const prenda3 = "pantalón"; //pantalón
    console.log(prenda3);
}
console.log(prenda3); //camisa



//Ámbito de función
/*
function saludar(){
    //código js
    var saludo = "hola";
    console.log(saludo); //hola
}
console.log(saludo); //error

function saludar2(){
    //código js
    let saludo = "hola";
    console.log(saludo); //hola
}
console.log(saludo); //error

function saludar3(){
    //código js
    const saludo = "hola";
    console.log(saludo); //hola
}
console.log(saludo); //error
*/

/*
//var
var pieza = "tornillo";
console.log(pieza); //camisa
{
    var pieza = "pantalón";
    console.log(pieza); //pantalón
}
console.log(pieza); //pantalón

//let
let pieza2 = "arandela";
console.log(pieza2); //camisa
{
    let pieza2 = "pantalón";
    console.log(pieza2); //pantalón
}
console.log(pieza2); //camisa

//const
const pieza3 = "camisa";
console.log(pieza3); //camisa
{
    const pieza3 = "pantalón"; //pantalón
    console.log(pieza3);
}
console.log(pieza3); //camisa
*/


//TIPOS DE DATOS PRIMITIVOS
/*
    String
    Number
    Boolean
    Null
    Undefined
    BigInt //buscar
    Symbol //buscar
*/

//String: en negro. Creado con un valor que le doy yo que se llama literal
let cadena1 = "soy una cadena";
let cadena2 = 'soy una cadena';
let cadena3 = "soy una 'cadena'";
let cadena4 = 'soy una "cadena"';
let cadena5 = "soy una \"cadena\"";
let cadena6 = `soy una cadena`; //plantilla de cadena: tildes giradas, une texto y variables
let cadena7 = "b";

//Operador de tipo typeof: el tipo de dato que es una variable
console.log(typeof cadena7);

//Number: en verde
let numero1 = 3;
let numero2 = 3.566;
let numero3 = -4;
let numero4 = -5.777;
let numero5 = 12e5; //exponencial
let numero6 = 12e-5; //exponencial
console.log("valor: "+numero6+" su tipo es "+typeof numero6);
//plantilla de cadena
console.log(`valor: ${numero6} su tipo es: ${typeof numero6}`);
//operador + concantena cadenas y variables

//Boolean
let cierto = true;
let falso = false;
let buleano; //undefined, ya que no está asignado un valor
console.log(buleano);
buleano = true;
console.log(buleano);
console.log(`valor: ${cierto} su tipo de dato es: ${typeof cierto}`);


let numero7 = "4";
console.log(`valor ${numero7} y su tipo es ${typeof numero7}`);
console.log(4+5+numero7); //no lo suma el numero7


//Undefined
let noDefinido; //undefined
console.log(typeof noDefinido);
noDefinido = 5;
console.log(typeof noDefinidio);
noDefinido = undefined;
console.log(typeof noDefinido);
//Si no le doy valor en la creación, será entonces undefined


//Null
let nulo = null;
console.log(`valor es ${nulo} y su tipo de dato es ${typeof nulo}`);
nulo = 4;
console.log(`valor es ${nulo} y su tipo de dato es ${typeof nulo}`);
nulo = null;
console.log(`valor es ${nulo} y su tipo de dato es ${typeof nulo}`);


//BigInt


//Symbol
