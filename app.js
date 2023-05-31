/*console.log("hola mundo")
console.log(2+3)
console.log("hola la temp de hoy es: ",8,"°c")
*/
const letrasContainer = document.getElementById("letras-container");
const opcionesContainer = document.getElementById(opciones-container);
const seccionIngresarUsuario = document.getElementById("secciom-ingresar-usuario");
const nuevoJuegoContainer = document.getElementsByClassName("nuevo-juego-container");
const nuevoJuegosButton = document.getElementById("nuevo-juego-button");
const canvas = document.getElementById("canvas");
const resultadoTexto = document.getElementById("resultado-texto");

let opciones = {
    frutas : [
        "manzana",
        "frutilla",
        "sandia",
        "naranja",
        "mandarina",
        "limon",
        "uva",
    ],
    animales:[
        "perro",
        "gato",
        "hamster",
        "nutria",
        "jirafa",
        "leon",
        "pantera",
        "rinoceronte",

    ],
    paises : [
        "argentina",
        "brasil",
        "alemania",
        "Estados Unidos",
        "España",
        "Chile",
        "Irlanda",
        "Africa",
    ],
}