//operadores asignación = += -= *= /=
let numero = 3;
let numero2 = 4;

console.log(numero += numero2);
numero -= numero2;
numero *= numero2;
numero /= numero2;


//operadores aritméticos + - / % *
console.log(numero + numero2);
numero - numero2;
numero / numero2;
numero % numero2;
numero * numero2;

//operadores comparación == === != !== < > >= <=
//== compara el valor
//=== compara valor y tipo de dato
let valor = 3; //number typeof
let valor2 = "3"; //string typeof     Javascript a veces hace una conversión automática de tipos, por lo tanto lo mira como un número aquí.
console.log(valor == valor2); //true
console.log(valor === valor2); //falso, compara el valor y el tipo. En valor son iguales pero en tipo no.
//!= no estricta
console.log(valor != valor2);
//!== estricta
console.log(valor !== valor2);

//operadores lógicos && || !


//predecencia operaciones
let x = 10;
let y = 20;
let z = "10";
let resultado;
resultado = x + y + z;
console.log(resultado);