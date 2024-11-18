function numAsteriscos() {

    const numeros = new Array(20);

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Math.floor(Math.random() * 50) + 1;
    }
    
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.textContent = ""; //así lo reiniciamos en cada click en el botón

    numeros.forEach(numero => {
        const linea = document.createElement("p");
        linea.textContent = "*".repeat(numero);
        resultadoDiv.appendChild(linea);
    });
}