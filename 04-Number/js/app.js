//Number creado a partir de literal
let numero = 3;

//Number creado como objeto new
let numero1 = new Number(3);

console.log(typeof numero);
console.log(typeof numero1);
// === comparación estricta (valor y tipo)
console.log(numero === numero1); //false
// == compara valor
console.log(numero == numero1); //true

let cadena = "hola"; //string
let cadena1 = new String("hola"); //object
console.log(typeof cadena);
console.log(typeof cadena1);
// === comparación estricta (valor y tipo)
console.log(cadena === cadena1); //false
// == compara valor
console.log(cadena == cadena1); //true

//Number creado como objeto new
let numero2 = new Number(3);
// === comparación estricta (valor y tipo)
console.log(numero2 === numero1); //false 
// == compara valor
console.log(numero2 == numero1); //false
// da false en los dos casos porque es imprecedible, es solo un objeto, una referencia, no tiene un valor en sí.

//NaN not a number
let noNumero = NaN;
console.log(noNumero+" es de tipo "+typeof noNumero); //plantilla de cadena
console.log("hola"/"hola"); //NaN not a number porque no es un número
console.log(3/0); //Infinity -Infinity

//función isNaN() devuelve true o false
console.log(isNaN("hola"/"hola")); //true
console.log(isNaN(3)); //false


//toString()
//Convierte y devuelve una representación en forma de cadena de un objeto
let cad = "Hola mundo";
let pasarCadena = cad.toString();
console.log(pasarCadena);

//toFixed()
//Sirve para redondear números
let num = 5.546;
let fixearNumero = num.toFixed(3); //el (3) es el número de decimales que quieres
console.log(fixearNumero);

//Number()
//El constructor Number() se utiliza para convertir un valor a un número
let str = "123.45";
let n = Number(str);
console.log(n);
console.log(typeof num);

//parseInt()
//Se utiliza para convertir una cadena en un número entero
let coso = "1";
let coso2 = parseInt(coso);
console.log(coso2);

//parseFloat()
//Se utiliza para convertir una cadena en un número decimal
let cosa = "1.200";
let cosa2 = parseFloat(cosa);
console.log(cosa2);

//isInteger()
//Devuelve true o false, es un método del objeto Number y mira si es un Integer
let cosa3 = 2.565;
let esEntero = Number.isInteger(cosa3);
console.log(esEntero); //false