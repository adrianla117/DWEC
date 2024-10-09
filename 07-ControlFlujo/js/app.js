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