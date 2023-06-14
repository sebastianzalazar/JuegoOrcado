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
};
let winCount = 0;
let count = 0;
let chosenWord = ""

const displayOptions = () =>{
    opcionesContainer.innerHTML +=`<h3>por favor seleccione una opcion</h3>`
    let buttoncon = document.createElement("div");
    for (let value in option){
        buttoncon.innerHTML += `<button class="options onclick="generateWord(${value})">${value}</button>`
           }     
           
        optionContainer.appendchiel(buttoncon);
};
let optionsbutton = document.querySelectorAll(`.options`);
let letterbuttons = document.querySelectorAll(`.letter`);

optionsbuttons.forEach((button)=>{
    button.disabled.true;
});
nuevoJuegoContainer.classlist.remove("hide");

const generateWord =(optionValue) =>{
    let optionsbuttons = document.querySelectorAll(`.options`);
    optionsbuttons.forEach((button)=>{
        if (button.innerHTML.tolowerCase()===optionValue){
            button.classlist.add=("active");
        }
        button.disabled=true;
    });
}
letrasContainer.classList.remove("hide");
seccionIngresarUsuario.innerText="";

let optionArray = options[optionValue];

chosenWord=optionArray[Math.floor(Math.ramdon()*
    optionArray.legth)];

    chosenWord= chosenWord.toUpperCase();

    let displayItem = chosenWord.replace(/./g,`<span class="dashes">_</span`);

    seccionIngresarUsuario.innerHTML = displayItem;



seccionIngresarUsuario.innerHTML="";
opcionesContainer.classList.add("hide");
nuevoJuegoContainer.classList.add("hide");
letrasContainer.classList.add("hide");
letrasContainer.innerHTML="";


for (let i= 65; i<91 ;  i++){
    let button= document.createElement("button");
    button.classList.add("lerres");

    button.innerText=String.fromCharCode(i);

    button.addEventListener("click",()=>{
        let charAray = chosenWord.split("");
        let dashes = document.getElementsByClassName("dashes");

        if (charAray.includes(button.innerText)){
            charAray.forEach((char,index)=>{
                dashes[index].innerText = char;

                winCount+=1;
                if (winCount ==charAray.legth){
                    resultadoTexto.innerHTML=`<h2 class="win-msg">ganastes :)</h2>`
                    blocker();
                }
            })
        }
    })
}