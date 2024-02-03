
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

let power = false;

let pilot = document.getElementById("piloto");

let onOrOff =document.getElementById("buttonPower");

onOrOff.addEventListener('click', () => {
    power = !power; //after click on the tv is true, so its on now.

    console.log(power);
    if (power) {
        pilot.classList.remove("pilotoOff"); //if power is true the class pilotoOff is deleted 
        pilot.classList.add("pilotoOn"); //and the class pilotoOn is added.
        console.log(pilot.classList);
    } else {
        pilot.classList.remove("pilotoOn"); //but, to switch to off its necessary to delet the class on.
        pilot.classList.add("pilotoOff");
        console.log(pilot.classList);
    }
});

 // while the buttonPower is true, the tv is on so you can press on the channels.

// let encendida = console.log(pilot.classList);

// if(encendida == true) 








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

