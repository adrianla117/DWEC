let edad;

while (true) {
    edad = prompt("Introduce tu edad:");

    if (edad === null) {
        console.log("Le has dado a cancelar");
        break; 
    } else if (edad.trim() === "") { 
        console.log("Debes escribir una edad");
    } else {
        let edadNumerica = parseInt(edad);
        if (isNaN(edadNumerica)) {
            console.log("No has introducido un número");
        } else { 
            console.log("Tu edad es "+edadNumerica);
            break; 
        }
    }
}