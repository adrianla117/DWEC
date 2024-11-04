function ptexto() {
    const texto = prompt("Introduce texto: ");
    const clave = parseInt(prompt("Introduce una contraseña: "));

    if (isNaN(clave)) {
        console.error("Contraseña inválida, debe ser un número");
        return;
    }

    let nuevoTexto = '';

    for (let i=0; i<texto.length; i++) {
        const codUnicod = texto.charCodeAt(i); //aquí obtenemos el código Unicode de cada caracter, en la posición i
        const nuevoCodUnicod = codUnicod + clave; //aquí desplazamos el código sumando la clave al valor codUnicod guardado antes.
        nuevoTexto += String.fromCharCode(nuevoCodUnicod); //convertimos el nuevoCodUnicod a caracter y lo añadimos a nuevoTexto, acumulando los caracteres en cada iteración
    }
    document.write(nuevoTexto);
}