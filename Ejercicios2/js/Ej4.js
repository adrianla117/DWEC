function validacionCuenta() {
    let usuario;
    let contrasena;

    function validarUsuario(nombre) {
        for (let i = 0; i<nombre.length; i++) {
            const char = nombre[i];
            if (!((char>='a' && char<='z') || (char>='0' && char<='9'))) {
                return false;
            }
        }
        return true;
    }

    function validarContrasena(pass) {
        let tieneMayuscula = false;
        let tieneMinuscula = false;
        let tieneNumero = false;
        let tieneEspecial = false;

        for (let i = 0; i<pass.length; i++) {
            const char = pass[i];
            if (char>='A' && char<='Z') tieneMayuscula = true;
            else if (char>='a' && char<='z') tieneMinuscula = true;
            else if (char>='0' && char<='9') tieneNumero = true;
            else tieneEspecial = true;
        }
        return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
    }

    while (true) {
        usuario = prompt("Introduce el nombre de usuario: ");
        if (usuario === null) {
            alert("Aplicación cancelada.");
            return;
        }

        if (validarUsuario(usuario)) break;
        alert("El nombre solo puede contener minúsculas y números. Hazlo otra vez.");
    }

    while (true) {
        contrasena = prompt("Introduce la contraseña: ");
        if (contrasena === null) {
            alert("Aplicación cancelada.");
            return;
        }

        if (validarContrasena(contrasena)) {
            alert("Datos guardados.");
            break;
        } else {
            alert("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter que no sea letra ni número. Hazlo otra vez.");
        }
    }
}
validacionCuenta();
