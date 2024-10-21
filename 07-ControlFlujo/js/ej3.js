function colorRandom() {
    const letraColor = '0123456789ABCDEF';
    let almColor = '#';
    for (let i = 0; i < 6; i++) {
        almColor += letraColor[Math.floor(Math.random() * 16)];
    }
    return almColor;
}

const contenedor = document.getElementById('contenedor');
const randCol = colorRandom();
contenedor.style.backgroundColor = randCol;
contenedor.textContent = randCol;