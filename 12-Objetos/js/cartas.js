//para comprobar en vez de darValor podemos utilizar una funcion fuera del constructor como esta:
/*function comprobarParametros(palo,valor){
    return (palo>=1 && palo<=4 && valor>=1 && valor<=10); //retorna un valor true o false
}*/


function Carta(palo, valor){
    //comprobación:
    if(!comprobarParametros(palo,valor)){
        return null;
    }

    this.palo = palo;
    this.valor = valor;

    this.valorToString = function(){
        switch(this.valor){
            case 1:
                return "As";
            case 2:
                return "Dos";
            case 3:
                return "Tres";
            case 4:
                return "Cuatro";
            case 5:
                return "Cinco";
            case 6:
                return "Seis";
            case 7:
                return "Siete";
            case 8:
                return "Sota";
            case 9:
                return "Caballo";
            case 10:
                return "Rey";
            default:
                return "desconocido";
        }

        //con array:
        /*this.paloToString = function(){
            const palos = ["","Oros","Espadas","Bastos","Copas"]; //el 0 ("") lo dejo vacío porque no hay un valor equivalente a 0 en el ejercicio
            return palos[this.palo];
        }*/
    };

    this.paloToString = function(){
        switch(this.palo) {
            case 1:
                return "oros";
            case 2:
                return "espadas";
            case 3:
                return "bastos";
            case 4:
                return "copasss";
            default:
                return "desconocido";
        }

        //con array:
        /*this.valorToString = function(){
            const valores = ["","As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Sota","Caballo","Rey"]; //el 0 ("") lo dejo vacío porque no hay un valor equivalente a 0 en el ejercicio
            return valores[this.valor];
        }*/
    };

    this.toString = function(){
        return `${this.valorToString()} de ${this.paloToString()}`;
    };

    this.darValor = function(nuevoValor, nuevoPalo){
        if(nuevoValor >= 1 && nuevoValor <= 10){
            this.valor = nuevoValor;
        }

        if(nuevoPalo >= 1 && nuevoPalo <= 4){ç
            this.palo = nuevoPalo;
        }
    };

    //llamamos la función de fuera:
    /*this.darValor = function(nuevoValor, nuevoPalo){
        if(comprobarParametros(nuevoPalo,nuevoValor)){
            this.palo = nuevoPalo;
            this.valor = nuevoValor;
        }
    }*/
}

//pruebas:
const cartaErronea = new Carta(-1,0);
console.log(cartaErronea);

const asOros = new Carta(1,1);
console.log(asOros);
console.log(asOros.paloToString());
console.log(asOros.valorToString());
console.log(asOros.toString());
as.Oros.darValor(2,2);
console.log(asOros.toString());

function Baraja(){
    this.cartas = [];

    this.crearBaraja = function(){
        for(let i = 1; i <= 4; i++){
            for(let j = 1; j <= 10; j++){
                this.cartas.push(new Carta(i, j));
            }
        }
    };

    this.barajar = function(){
        this.barajaDesordenada = [];
        let cartasRestantes = this.cartas.length;

        for(let i = 0; i < cartasRestantes; i++){
            let num = Math.floor(Math.random() * this.cartas.length);
            this.barajaDesordenada.push(this.cartas[num]);
        }
    };

    this.enseñarBaraja = function(){
        for(let i = 0; i < this.barajaDesordenada.length; i++){
            console.log(this.barajaDesordenada[i].toString());
        }
    }
}


//function Baraja() también podría ser así:
/*function crearBaraja(){
    const cartas = [];
    //se puede rellenar aquí la baraja
    for (let p=1; p<=4; p++){
        for (let v=1; v<=10; v++){
            this.cartas.push(new cartas(p,v));
        }
    }
    return cartas;
}*/



/*function Baraja(){
    this.cartas = crearBaraja();
   
    //copia de un array
    const nuevoArray = [...this.cartas];
}*/