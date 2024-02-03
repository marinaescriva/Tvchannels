
// const buttons = document.getElementsByClassName("button")

// let arrayButtons = Array.from(buttons)

// let screen = document.getElementById("screen")

// let power = false;

// document.getElementById("piloto").addEventListener("click", (evento) => {
//     if (power) {
//         screen.classList.remove("pilotoOff");
//         screen.classList.add("pilotoOn");       
//     }
// })

let power = false;

// let piloto = document.getElementByClass("pilotoOff");

// document.getElementById('buttonPower').addEventListener('click', () => {
//     power = !power;
//     if (power) {
//         piloto.classList.remove("pilotoOff");
//         piloto.classList.add("pilotoOn");
//         console.log(piloto.classList);
//     }
//     else {
//         piloto.classList.remove("pilotoOn");
//         piloto.classList.add("pilotoOff");
//         console.log(piloto.classList);
//     }
//     console.log(power);
// });

document.getElementById('buttonPower').addEventListener('click', () => {
    power = !power;

    console.log(power);
    if (power) {
        document.getElementById("piloto").classList.remove("pilotoOff");
        document.getElementById("piloto").classList.add("pilotoOn");
        console.log(document.getElementById("pilot").classList);
    } else {
        document.getElementById("piloto").classList.remove("pilotoOn");
        document.getElementById("piloto").classList.add("pilotoOff");
        console.log(document.getElementById("piloto").classList);
    }
});









// function change(){

//     let apagado = document.getElementById("divUno");
//     let encendido = document.getElementsByClassName("divDos");

//     if(apagado.hidden == true && encendido[0].hidden == false);{
//         apagado.hidden = false;
//         encendido[0].hidden = true;
//         } else{
//         apagado.hidden = true;
//         encendido[0].hidden = false;
//     }
// }

// document.getElementById("onOff").addEventListener(("click",()) =>{

//     screen.classList.remove(screenClassList)
//     screen.classList.add("buttonPower" + ())
// })

//     power = !power;
        
//     arrayButtons.map(
//         item => {
//             item.addEventListener("click", (evento) => {
                
//                 screen.classList.remove(screen.classList[screen.classList.length - 1])
//                 screen.classList.add("canal" + evento.target.id.slice(-1))
//             })
//         }
//     )

            
        

 
// //probando el botón power

