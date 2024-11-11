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