function loteria() {
    const sorteo = new Set();

    for (let i=0; i<50; i++){
        for (let i=0; i<6; i++){
            const numRandom = Math.floor(Math.random() * 49) + 1;
            sorteo.add(numRandom);
        }
        console.log(sorteo);
    }
}