function num() {
    const num1 = prompt("Introduce un número entero y positivo: ");
    const cant = parseInt(num1);

    if (!Number.isInteger(cant) || cant <= 0) {
        console.log("El número introducido está mal");
    } else {
        cuadrados(cant);
    }
}

function cuadrados(cant){
    const contenedor = document.getElementById('contenedor');

    for(let i = 0; i < cant; i++){
        const espacio = document.createElement('div');
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        espacio.style.backgroundColor = color;

        espacio.style.width = '50px';
        espacio.style.height = '50px';
        espacio.style.position = 'absolute';
        espacio.style.left = `${Math.random() * (900 - 50)}px`;
        espacio.style.top = `${Math.random() * (700 - 50)}px`;

        contenedor.appendChild(espacio);
    }
}

document.addEventListener('DOMContentLoaded', num);