function juegoNum() {
    const numRandom = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let num1 = 0;

    while (true) {
        num1 = prompt("Adivina el número (1-100): ");
        if (num1 === null){
            console.log("Juego cancelado.");
            break;
        }
        
        if (num1.trim() === "") {
            console.log("Tienes que introducir un número.");
            continue;
        }
        num1 = Number(num1);

        if (isNaN(num1)) {
            console.log("La información insertada no es un número");
            continue;
        }

        intentos++;

        if (num1 < 1 || num1 > 100) {
            console.log("Introduce un númro entre 1 y 100: ");
        } else if (num1 < numRandom) {
            console.log("El número random es mayor que el introducido.");
        } else if (num1 > numRandom) {
            console.log("El número random es menor que el introducido.");
        } else {
            console.log('Número acertado. Número de intentos: ' + intentos);
            break;
        }
    }
}