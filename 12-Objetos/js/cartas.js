
function Carta(palo, valor){
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
}

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
