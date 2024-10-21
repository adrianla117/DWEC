function astTriangulo() {
    const numIntroducido = document.getElementById('num').value;
    const num = Number(numIntroducido);
    const res = document.getElementById('fin');

    res.textContent = '';

    if (!Number.isInteger(num) || num <= 0) {
        console.log("El número introducido es negativo");
        return;
    }

    for (let i = 1; i <= num; i++){
        let fil = '* '.repeat(i);
        res.textContent += fil.trim() + '\n';
    }

    res.textContent += '\n';

    for (let i = num; i >= 1; i--){
        let fil = '* '.repeat(i);
        res.textContent += fil.trim() + '\n';
    }
}