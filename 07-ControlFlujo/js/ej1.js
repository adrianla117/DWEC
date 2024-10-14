let edad = prompt("Introduzca su edad");
console.log(edad);

if(!edad){
    console.log("Debes escribir una edad");
}else if(edad === null){
        console.log("Le has dado a cancelar");
}else if(isNaN(edad)){
    console.log("No has introducido un número");
}else{
    console.log("Tu edad es"+edad);
}