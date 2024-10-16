const fecha = new Date();
const arrayEnlaces = ["www.google.es", "www.Marca.com", "www.Twitter.com", "www.Mozilla.org"];
const numeroRandom = Math.floor(Math.random() * arrayEnlaces.length);
const enlaceRandom = arrayEnlaces[numeroRandom];

console.log(enlaceRandom);


if (fecha.getHours()>=7 && fecha.getHours()<=14){
    console.log("Buenos días usuari@ hoy es Miércoles y el enlace del día es "+enlaceRandom);
}else if (fecha.getHours()>14 && fecha.getHours()<=20){
    console.log("Buenos tardes usuari@ hoy es Miércoles y el enlace del día es "+enlaceRandom);
}else{
    console.log("Buenas noches usuari@ hoy es Miércoles y el enlace del día es "+enlaceRandom);
}
