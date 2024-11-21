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

function obtenerCarta(){
    let indice = Math.floor(Math.random() * mazo.length);
    let carta = mazo[indice];
    mazo.splice(indice, 1); //así vamos eliminando cartas del mazo cada vez
    return carta;
}

function calcularPuntos(mano){
    let valores = mano.map(c => {
        if (['J', 'Q', 'K'].includes(c.carta)) return 10; //así hacemos que las figuras valgan 10 puntos
        if (c.carta === 'A') return 1; //así el As vale 1
        return parseInt(c.carta); //las cartas del 2 al 10 las convertimos a números enteros
    });

    let puntaje = valores.reduce((acc, val) => acc + val, 0);
    return puntaje;
}

//aquí están las variables del DOM
const cartasJ = document.getElementById("cartasJugador");
const cartasC = document.getElementById("cartasCrupier");
const mensajeResultado = document.getElementById("mensaje");
mensajeResultado.style.color = "red"; //para cambiar el color del mensaje a rojo
const botonHit = document.getElementById("hit");
const botonStand = document.getElementById("stand");

function generarRutaImagen(carta){ //función para la ruta de nuestras imagenes
    return `imagenes/${carta.carta}_${carta.palo}.png`;
}

function mostrarMano(mano, imagen){
    imagen.innerHTML = ""; //así limpiamos el contenido actual cada vez
    mano.forEach(carta => { //conseguimos generar en el html las imagenes dependiendo de la carta
        imagen.innerHTML += `<img src="${generarRutaImagen(carta)}" alt="${carta.carta} de ${carta.palo}" />`;
    });
}


function blackjack(){
    let jugador = [];
    let crupier = [];

    jugador.push(obtenerCarta(), obtenerCarta());
    crupier.push(obtenerCarta(), obtenerCarta());

    mostrarMano(jugador, cartasJ);
    mostrarMano(crupier, cartasC);

    //aquí le toca al jugador
    botonHit.addEventListener("click", () => {
        jugador.push(obtenerCarta());
        mostrarMano(jugador, cartasJ);
        let puntosJugador = calcularPuntos(jugador);

        if(puntosJugador > 21){
            mensajeResultado.innerText = "Te has pasado de 21. Has perdido.";
            botonHit.disabled = true; //aquí deshabilitamos los botones cuando perdemos
            botonStand.disabled = true; //aquí deshabilitamos los botones cuando perdemos
        }
    });

    //aquí le toca al crupier
    botonStand.addEventListener("click", () => {
        botonHit.disabled = true;

        let puntosCrupier = calcularPuntos(crupier);
        while(puntosCrupier < 17){ //el crupier si tiene menos de 17 puntos tiene que seguir pidiendo cartas obligatoriamente
            crupier.push(obtenerCarta());
            puntosCrupier = calcularPuntos(crupier);
        }

        mostrarMano(crupier, cartasC);
        let puntosJugador = calcularPuntos(jugador);

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