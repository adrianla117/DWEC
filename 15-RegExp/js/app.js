/*
    EXPRESIÓN REGULAR
    Sintaxis:
        const = patron = /patron/modificador;

    Modificadores:
        i : no distingue entre mayúsculas y minúsculas
        g : la búsqueda se realiza de forma global, en toda la cadena

    Patrones:
        [abc] : que se busca alguno de los caracteres entre corchetes
        [^abc] : busca algún caracter que no esté incluido en el corchete
        [a-z]
        [A-Z]
        [0-9]
        (x | y) : busca uno de los dos caracteres

    Métodos de cadenas que se suelen emplear con expresiones regulares
    patron.test(cadena): comprueba si un patrón está en una cadena y devuelve true o false

    search()
    match(): devuelve un array con la/s conincidecia/s de buscar un patrón en una cadena
    replace()
*/

const saludo = "Hola gente";
//const p1 = /ola/; //devolvería true, ya que se encuentra en saludo, ya que se solo busca si las 3 letras están dentro
/*const p1 = /[ola]/; //devolvería true también, ya que busca si al menos una de esas letras está en la cadena*/
/*const p1 = /[opq]/; //devolvería true, lo mismo que el de arriba*/
/*const p1 = /[^ola]/; //devolvería true, ya que busca si al menos una de esas letras no está en la cadena. Si hay algún caracter que no está en la cadena, da false*/
/*const p1 = /[UOE]/; //false, ya que están en mayúsculas y en la cadena no*/
const p1 = /[UOE]/i; //true, ya que gracias al modificador i, no distingue entre mayúsculas y minúsculas
console.log(p1.test(saludo));

const cadena = "mesa, libro, mesa, silla";
const p2 = /mesa/ig; //se pueden poner los modificadores que queramos unidos
console.log(cadena.match(p2));