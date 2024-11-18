function frasesPalindromo() {
        let texto = prompt("Escriba un texto para ver si es un palíndromo:");

        if (texto === null || texto.trim() === "") {
            document.getElementById("resultado").textContent = "No se ingresó ningún texto.";
            return;
        }

        texto = texto.toLowerCase();
        const textoLimpio = limpiarTexto(texto);

        let esPalindromo = true;
        const longitud = textoLimpio.length;

        for (let i = 0; i < longitud / 2; i++) {
            if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
                esPalindromo = false;
                break;
            }
        }

        const resultado = document.getElementById("resultado");
        if (esPalindromo) {
            resultado.textContent = `"${texto}" es palíndromo.`;
        } else {
            resultado.textContent = `"${texto}" no es palíndromo.`;
        }
    }

    function limpiarTexto(texto) {

        return texto.replace(/[^a-z0-9]/g, "");
}