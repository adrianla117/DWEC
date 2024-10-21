function unicodeTabla() {
    const tbody = document.getElementById('tablaunicode').getElementsByTagName('tbody')[0];

    for (let i = 0; i < 1000; i++) {
        if (i % 10 === 0) { //Así se crea una nueva fila cada 10 símbolos
            var row = document.createElement('tr');
            tbody.appendChild(row);
        }

        const codCelda = document.createElement('td');
        codCelda.textContent = i;
        row.appendChild(codCelda);

        const simbCelda = document.createElement('td');
        simbCelda.textContent = String.fromCharCode(i);
        row.appendChild(simbCelda);
    }
}

document.addEventListener('DOMContentLoaded', unicodeTabla);