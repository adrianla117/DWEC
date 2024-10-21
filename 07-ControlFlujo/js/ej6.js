function num() {
    const num1 = prompt("Introduce un número entero y positivo: ");
    const cant = parseInt(num1);
    
    if (!Number.isInteger(cant) || cant <= 0) {
        console.log("El número introducido está mal");
    } else {
        cuadrados(cant);
    }
}

num();

function cuadrados(cant){
    
}