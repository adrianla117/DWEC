//STRING
let cadena = "hola Mundo";
let cadena1 = new String("Hola Mundo"); //no usar
let cadena2 = `Hola Mundo`;

//Propiedades
//cadena.length
console.log(cadena.length);

//Métodos. No cambian la cadena original!!!
//MAY Y MIN toLowerCase() cadena.toUpperCase()
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());

//BUSCAR POSICIÓN
//charAt(), at(), cadena[]
console.log(cadena.charAt(0)); //H
console.log(cadena.at(0)); //H
console.log(cadena[0]); //H

//posición que no existe
console.log(cadena.charAt(100)); //cadena vacía
console.log(cadena.at(100)); //undefined
console.log(cadena[100]); //undefined

console.log(cadena.charAt(-5)); //undefined
console.log(cadena.at(-5)); //M
console.log(cadena[-5]); //cadena vacía

//BUSCAR POSICIÓN
//cadena.indexOf(), cadena.lastIndexOf(), includes() para comprobar si una cadena incluye x caracteres, startsWith(), endsWith()
console.log(cadena.indexOf("o")); //1
console.log(cadena.lastIndexOf("o")); //9
console.log(cadena.lastIndexOf("O")); //-1 si no existe

console.log(cadena.includes("M")); //true
console.log(cadena.includes("m")); //false

console.log(cadena.startsWith("M")); //false
console.log(cadena.startsWith("Ho")); //true

console.log(cadena.endsWith("o")); //true
console.log(cadena.endsWith("Ho")); //false

//cadena.CONCAT() (+)
console.log(cadena.concat(" ", cadena2));

//cadena.repeat(n)
console.log(cadena.repeat(5));
console.log("a".repeat(5));

//EXTRAER PARTES DE UNA CADENA
//substring(inicio, fin), slice(inicio, fin)
console.log(cadena.substring(0, 4)); //Hola
console.log(cadena.slice(0,4)); //Hola
console.log(cadena.slice(-5)); //Mundo 
//La diferencia es que slice permite valores negativos

//ESPACIOS
//trim(), trimStarts(), trimEnds()
let cadena3 = "        H         ";
console.log(cadena3.length);
cadena3 = cadena3.trimStart();
console.log(cadena3.length);

//split(separador) convierte una cadena en un array
const array = cadena.split(" ");
console.log(array);
console.table(array);

const array2 = cadena.split("");
console.log(array2);
console.table(array2);

const array3 = cadena.split("M");
console.log(array3);
console.table(array3);

const array4 = cadena.split("W");
console.log(array4);
console.table(array4);

//REEMPLAZAR
//replace(vviejo, vnuevo), replaceAll(vviejo, vnuevo)

let nombre = "pepe";
let nombre2 = "Pepe";
if (nombre>nombre2){
    console.log(`${nombre} mayor`)
}else if(nombre2>nombre){
    console.log(`${nombre2} mayor`)
}else{
    console.log("Iguales");
}
//charCodeAt()
console.log("p".charCodeAt()); //112
console.log("P".charCodeAt()); //80

//localeCompare: 1, -1, 0 //español y sin pensar en case sensitive
console.log(nombre.localeCompare(nombre2));

//¿Como hacer para que sean iguales, si p es mayor que P?