//INSTRUCCIONES DE ENTRADA JS
/*
    confirm: cuadro diálogo con dos botones acep / cancelar
    devuelve un boolean true o false
    sintaxis:
        let resultado = confirm("Mensaje");
        *cons es para cosas que no vayan a cambias, sino usamos let

    prompt: cuadro diálogo con un mensaje y opcional sms con instrucción, dos botones acep/cerrar
    devuelve un string, null, string vacío
    sintaxis:
        let dato = prompt("Mensaje","Instrucciones");

*/

//let resultado = confirm("¿Quieres cerrar la ventana?")
//console.log(resultado);

//let dato = prompt("Introduzca su edad","Por ejemplo: 20");
//console.log(dato);
//console.log(typeof dato);


//OBJECTO Math
/*
    No se crea con new, es estático.
    Propiedad:
        Math.propiedad
        Math.PI

    Métodos:
        Math.metodo
        round, cell, floor, trunc, min, max,abs, sign, pow, random
*/

console.log(Math.trunc(3.544345));
console.log(Math.round(3.544345));
console.log(Math.ceil(3.544345));
console.log(Math.floor(3.544345)); 
console.log(Math.sign(3.544345)); //1
console.log(Math.sign(-3.544345)); //-1
console.log(Math.min(3.544345, -2, 4, -1)); //-2
console.log(Math.random()); //entre 0 y 1 (excluído)
console.log(Math.floor(Math.random()*11));

//Conseguir num aleatorio entre 5-15
//(Math.random()*(max-min))+min

//CONTROL DE FLUJO
/*
    if(condicion){
        instrucciones;
    }else if (condicion){
        instrucciones;
    }else{
        instrucciones;
    }

    OPERADOR TERNARIO
    (condicon) ? valor1 : valor2;
*/
let local = 3;
let visitante = 2;
if(local > visitante){
    console.log("Local gana");
}else if(visitante > loval){
    console.log("Visitante gana");
}else{
    console.log("Empatan");
}

//(condicion) ? valor1 : valor2;
//*Si no queremos utilizar IF podemos utilizar esto:
console.log((local > visitante) ? "Local gana" : 
((visitante > local) ? "Visitante gana" : "Empatan"));


//document.write("<h1>dadd</h1>"); Así ponemos etiquetas en js


//OBJETO DATE
/*Objeto que permite crear y manipular fechas y horas
    No es estático, tengo que crearlo con new
    sintaxis:
        const fecha = new Date();

    Métodos:
        getFullYear(), getDate(), getDay(), getHours(), getMinutes(), getMonth(), getTime()
*/
const fecha = new Date(); //Le puse const porque el valor de fecha no va a cambiar.
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getDate());
console.log(fecha.getDay()); //La semana empieza en 0 que es domingo
console.log(fecha.getTime()); //devuelve la fecha en ms

//creamos dos fechas 1/1/2024 31/12/2024
const fecha1 = new Date("2024-1-1");
console.log(fecha1);
//Segunda forma de construírla:
//const fecha2 = new Date(2024,0,1); //Enero empieza en el 0
const fecha2 = new Date("2024-12-31");
let diferenciaFecha = fecha2.getTime() - fecha1.getTime();
let diferenciaDias = diferenciaFecha /(1000 * 60 * 60 * 24);
console.log(Math.round(diferenciaDias));

//SWITCH
/*
    Sintaxis:
        switch (expresion){
            case valor1:
                instrucciones;
                break;
            case valor2:
                instrucciones;
                break;
            default: //opcional
                instrucciones;
                //no hace falta break;
        }

        Tiene comparaciones estrictas!!! === !==    == != (no estricta compara el valor solo y estricta el valor y el tipo)
*/

let nota = 3;
switch (nota){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Suspenso");
        break;
    case 5:
        console.log("Aprobado");
        break;
    case 6:
        console.log("Bien");
        break;
    case 7:
    case 8:
        console.log("Notable");
        break;
    case 9:
    case 10:
        console.log("Sobresaliente");
        break;
    default:
        console.log("La nota es incorrecta");
}


//FOR
/*
    Sintaxis:
        for (expresionInicial; expresionCondicion; expresionActualizacion){
            instrucciones;
        }

*/

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//console.log(i);

//OMITIR PRIMERA EXPRESIÓN
let i = 1;
for ( ; i<=10; i++){
    console.log(i);
}
console.log(i); //11

//OMITIR SEGUNDA EXPRESIÓN
for (let j = 1; ; j++){
    if(j>10){
        break;
    }
    console.log(j);
}

//OMITIR TERCERA INSTRUCCIÓN
for (let j = 1; j<=10; ){
    console.log(j);
    j++; //j += 1;
}

//continue
for (let j = 1; j <= 10; j++){
    if (j%2===0){
        continue; //continue salta a la iteración siguiente
    }
    if (j>5){
        break; //break termina la ejecución
    }
    console.log(j);
}

