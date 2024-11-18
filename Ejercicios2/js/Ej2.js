function loteria() {
    const combinaciones = [];

    for (let i=0; i<50; i++){
        const sorteo = new Set();
        while(sorteo.size < 6){
            const numRandom = Math.floor(Math.random() * 49) + 1;
            sorteo.add(numRandom);
        }
        combinaciones.push([...sorteo]);
    }
    combinaciones.forEach((combinacion, indice) => {
        console.log(`Combinación ${indice + 1}:`, combinacion);
    });
}