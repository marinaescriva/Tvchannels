
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

let power = false; //because the tv starts off.

let pilot = document.getElementById("piloto"); // piloto selected
let onOrOff =document.getElementById("buttonPower"); // buttonPower selected
let screen = document.getElementById("screen"); // screen selected

// let tvStatus = screen.classList.remove("channel" && e.target.id.slice(-1))

onOrOff.addEventListener('click', () => {
    
    power = !power; //after click on the tv is true, so its on now.
    // tvStatus = true;

    console.log(power);
    if (power) {
        screen.classList.remove("screenBlack")
        screen.classList.add("screenColor") //screen is available. and the class is now: "basicScreen"
        pilot.classList.remove("pilotoOff"); //if power is true the class pilotoOff is deleted 
        pilot.classList.add("pilotoOn"); //and the class pilotoOn is added.
    } else {
        screen.classList.remove("screenColor")
        screen.classList.add("screenBlack") //screen is available. and the class is now: "basicScreen"
        pilot.classList.remove("pilotoOn"); //but, to switch to off its necessary to delet the class on.
        pilot.classList.add("pilotoOff");
    }
});
//when the power=true means tv is on so, if its true the channels will be available.

const buttons = document.getElementsByClassName("button") //all buttons are selected for...

let arrayButtons = Array.from(buttons)

arrayButtons.map(
    item => {
        item.addEventListener("click", (e) =>{

            if (power==true){

            // screen.classList.remove("screenColor")
            // screen.classList.add("channel")
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("channel" + e.target.id.slice(-1))

            }

        })
    }
)





// 

// while the buttonPower is true, the tv is on so you can press on the channels.

        // const buttons = document.getElementsByClassName("button")

        // let arrayButtons = Array.from(buttons)

        // screen = document.getElementById("screen")

        // arrayButtons.map(
        //     item => {
        //         item.addEventListener("click", (event) => {
        //             screen.classList.remove(screen.classList[screen.classList.length - 1])
        //             screen.classList.add("channel" + event.target.id.slice(-1))
        //         })
        //     }
        // )
        // }

