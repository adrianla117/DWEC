/*Explicación BlackJack:*/

/*Es un popular juego de cartas que se juega entre uno o más jugadores y un crupier
 (dealer). El objetivo del juego es tener una mano con un valor total de puntos lo
 más cercano posible a 21, pero sin pasarse de este número. Si el jugador supera al
 crupier sin exceder 21, gana. Si el jugador se excede, pierde. El crupier si se excede de 21 pierde.
 
 Las cartas del 1 (el AS) al 10 valen su número en sí en puntos
 Las cartas como la J, la Q y la K valen 10 puntos cada una
 
 De primeras se reparten 2 cartas al crupier y al jugador.
 Luego, quien juega siempre primero es el jugador, el crupier va de segundo.
 Las cartas del jugador y crupier siempre están a la vista de todos, nunca boca abajo.

 El jugador puede pedir una carta haciendo "hit" (el botón de hit) o plantarse haciendo "stand"
 (el botón de stand) y quedarse con las cartas que tiene en ese momento.
 El crupier 16 puntos o menos debe pedir carta (hace hit), pero cuando tiene 17 puntos o más debe
 plantarse obligatoriamente (hace stand). 
 */

 //aquí declaramos los palos y números de la baraja.
let palos = ['corazones', 'picas', 'tréboles', 'diamantes'];
let cartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//creamos el mazo de cartas, que tiene que ser de 52 cartas.
function crearMazo() {
    let mazo = [];
    for(let palo of palos){
        for(let carta of cartas){
            mazo.push({ carta, palo });
        }
    }
    return mazo;
}

let mazo = crearMazo();

//con esta función conseguimos que no se repitan cartas ya que las cartas que utilizan el jugador y el crupier se van eliminando del mazo
function obtenerCarta(){
    let indice = Math.floor(Math.random() * mazo.length);
    let carta = mazo[indice];
    mazo.splice(indice, 1); //así vamos eliminando cartas del mazo cada vez
    return carta;
}

//con esta función vamos calculando los puntos que tienen el jugador y el crupier
function calcularPuntos(mano){
    let valores = mano.map(c => {
        if (['J', 'Q', 'K'].includes(c.carta)) return 10; //así hacemos que las figuras (J, Q, K) valgan 10 puntos
        if (c.carta === 'A') return 1; //así el As vale 1
        return parseInt(c.carta); //las cartas del 2 al 10 las convertimos a números enteros
    });

    let puntaje = valores.reduce((acc, val) => acc + val, 0); //reduce permite iterar en el array y acumular el resultado.
    //El 0 que hay al final es el valor inicial de acc, que empieza en 0.
    return puntaje;
}

//aquí están las variables del DOM
const cartasJ = document.getElementById("cartasJugador");
const cartasC = document.getElementById("cartasCrupier");
const mensajeResultado = document.getElementById("mensaje");
mensajeResultado.style.color = "red"; //para cambiar el color del mensaje a rojo
mensajeResultado.style.textAlign = "center"; //así centramos el mensaje en la web
const botonHit = document.getElementById("hit");
const botonStand = document.getElementById("stand");

function generarRutaImagen(carta){ //función para la ruta de nuestras imagenes
    return `imagenes/${carta.carta}_${carta.palo}.png`;
}


function mostrarMano(mano, imagen){
    imagen.innerHTML = ""; //así limpiamos el contenido actual cada vez
    mano.forEach(carta => { //conseguimos generar en el html las imagenes gracias a la ruta (src) y dependiendo de la carta
        imagen.innerHTML += `<img src="${generarRutaImagen(carta)}" />`;
    });
}


function blackjack(){
    let jugador = [];
    let crupier = [];

    jugador.push(obtenerCarta(), obtenerCarta()); //así, al iniciar la aplicación, hacemos que al crupier y al jugador le aparezcan dos cartas de primeras
    crupier.push(obtenerCarta(), obtenerCarta());

    mostrarMano(jugador, cartasJ); //así se muestran las cartas en la web
    mostrarMano(crupier, cartasC);

    //aquí le toca al jugador, que siempre juega el primero
    botonHit.addEventListener("click", () => {
        jugador.push(obtenerCarta()); //cuando hacemos hit obtenemos una carta
        mostrarMano(jugador, cartasJ); //y aquí se muestra en la web
        let puntosJugador = calcularPuntos(jugador); //aquí calculamos los puntos del jugador en este caso.

        if(puntosJugador > 21){
            mensajeResultado.innerText = "Te has pasado de 21. Has perdido.";
            botonHit.disabled = true; //aquí deshabilitamos los botones cuando perdemos
            botonStand.disabled = true;
        }
    });

    //aquí le toca al crupier
    botonStand.addEventListener("click", () => {
        botonHit.disabled = true; //deshabilitamos el botón de hit en el turno del crupier para que no podamos pulsar ya que nosotros somos el jugador

        let puntosCrupier = calcularPuntos(crupier); //el puntaje del jugador debe ser comparado con el del crupier después de que el crupier termina su turno.
        while(puntosCrupier < 17){ //el crupier si tiene menos de 17 puntos tiene que seguir pidiendo cartas obligatoriamente
            crupier.push(obtenerCarta()); //el crupier obtiene la carta
            puntosCrupier = calcularPuntos(crupier); //se calculan los puntos del crupier
        }

        mostrarMano(crupier, cartasC); //se muestra la mano del crupier en la web
        let puntosJugador = calcularPuntos(jugador); //se calculan los puntos del jugador

        //aquí empezamos a comparar si el jugador o el crupier ganan
        if(puntosCrupier > 21 || puntosJugador > puntosCrupier){
            mensajeResultado.innerText = "¡Has ganado!";
        } else if(puntosJugador < puntosCrupier){
            mensajeResultado.innerText = "¡Has perdido!";
        } else{
            mensajeResultado.innerText = "¡Has empatado!";
        }
    });

}

blackjack();













/*function mostrarMano(mano){
    return mano.map(c => ` ${c.carta} de ${c.palo}`);
}*/





    //aquí le toca al jugador
    /*let resp = "hit"; 
    while(resp === "hit"){
        resp = prompt("¿Quieres otra carta o plantarte? (responde hit o stand)").toLowerCase();
        if(resp === "hit"){
            jugador.push(obtenerCarta());
            console.log("Tus cartas: ", jugador);

            let puntosJugador = calcularPuntos(jugador);
            console.log("Tu puntaje actual: ", puntosJugador);

            if(puntosJugador > 21){
                console.log("Te has pasado de 21. Has perdido.");
                return;
            }
        }
    }*/


//aquí le toca al crupier
/*console.log("Cartas del crupier: ", crupier);
let puntosCrupier = calcularPuntos(crupier);
while(puntosCrupier < 17) {
    crupier.push(obtenerCarta());
    console.log("Cartas del crupier: ", crupier);
    puntosCrupier = calcularPuntos(crupier);
}*/


//aquí empezamos a calcular al jugador y el crupier para ver quién gana
    /*let puntosJugador = calcularPuntos(jugador);
    if (puntosCrupier > 21 || puntosJugador > puntosCrupier) {
        console.log("Ganaste");
    } else if (puntosJugador < puntosCrupier){
        console.log("Perdiste");
    } else {
        console.log("Empate");
    }
        
    
    console.log("Puntaje final del crupier: ", puntosCrupier);*/