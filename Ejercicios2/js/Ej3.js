function azar() {
    const frecuencias = Array(10).fill(0);

    for (let i = 0; i<10000; i++){
        const numRandom = Math.floor(Math.random() * 9) + 1;
        frecuencias[numRandom - 1]++;
    }

    const listaFrecuencias = document.getElementById("frecuencias");

    frecuencias.forEach((frecuencia, index) => {
        const numero = index + 1;
        const elemento = document.createElement("li");
        elemento.textContent = `Número ${numero}: ${frecuencia}`;
        listaFrecuencias.appendChild(elemento);
    });
}