//COMENTARIO EN LINEA: Descripciones breves, justo antes o justo despues del código
/*COMENTARIO MULTILINEA: Se usa para comentarios más extensos,
usados para explicar una función o trozos grandes de código
*/
//Como se inserta javascript
/*
1ª FORMA:
<script>
Código javascript
</script>
Para código simple y puntual, no es recomendable
2ª FORMA:
<script src="ruta_archivo.js"></script>
ATRIBUTOS ADICIONALES:
- type="text/javascript"
- async
- defer
Más legible, reutilizable, código extenso
*/
//Donde se inserta javascript
/*
Interna: dentro del html
Externa: con un documento aparte
<head>: Cuando quiero que se ejecute javascript antes de que el html esté cargado
<body>: Cuando quiero que se ejecute javascript despues de que el html esté cargado
*/
//INSTRUCCIONES DE SALIDA
/*
- console.log("mensaje"): sms consola pruebas y depuración
- alert("mensaje") o window.alert("mensaje")
- document.write("mensaje con eqtiquetas html"): se usa solo en pruebas
y escribe sobre el html (ejemplo en index)
*/
console.log("Mi primer mensaje por consola");
console.error("Error");
console.warn("Advertencia");
console.table("No vais a ver una tabla"); // Para visualizar en tabla objetos, matrices, set
// alert("My primer mensaje de alerta");
//SENTENCIAS Y SINTAXIS
/*
Identificadores: No pueden empezar por un número, empiezas por una letra, _, $
despues ya pueden tener, números, letras...
Case sensitive: distingue las mayúsculas que la minúsculas( var y VAR no son lo mismo)
No se pueden usar palabras reservadas para crear identificadores
Las instrucciones acaban (no obligatoriamente, pero si recomendable) en ;
Los desarrolladores no sueles crear instrucciones muy largas,
y si lo son, cortarlas por un operador
Los espacions en blanco no se tienen en cuenta
Concepto bloque: Es lo que va entre llaves {}
Camel Case: otroNumero, primeraCadena
Snake: otro_numero, primera_cadena
Pascal: OtroNumero, PrimeraCadena
*/
//Sintaxis: var identificador = valor
var cadena = "Mi primera cadena";
var numero = 4;
var cierto = true;
var decimal = 4.5;
var sinValor; //declarar la variable y no asignar valor: undefined
console.log(cadena);
console.log(numero);
console.log(cierto);
console.log(decimal);
console.log(sinValor);
//typeof: me devuelve el tipo de dato de una variable
console.log(typeof sinValor);
sinValor = "hola";
console.log(sinValor);
console.log(typeof sinValor);
sinValor = 4;
console.log(sinValor);
console.log(typeof sinValor);
//VARIABLES
/*
var (anterior a 2015)
let (2015)
const (2015)
*/
var fruta = "kaki";
//redeclarar: SI
var fruta = "limón"
console.log(fruta);
//let
//redeclarar??
let carnaca = "chorizo";
console.log(carnaca);
//let carnaca = "chuleta"; //Uncaught SyntaxError: redeclaration of let carnaca
//console.log(carnaca);
//const: se usa cuando queremos declararun elementos que no cambia su valor o tipo/referente
const PI = 3.141516;
console.log(PI);
//const PI=4;
var fruta = "kaki";
//redeclarar: SI
//reasignar:
fruta = "limón"
console.log(fruta);
//let
//redeclarar: NO
//reasignar:
let carnota = "chorizo";
console.log(carnaca);
carnota = "chuleta"; //Uncaught SyntaxError: redeclaration of let carnaca
console.log(carnaca);
//const: se usa cuando queremos declararun elementos que no cambia su valor o tipo/referente
const Pi = 3.141516;
console.log(PI);
Pi=4;