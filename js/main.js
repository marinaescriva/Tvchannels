


let power = false; //because the tv starts off.

let pilot = document.getElementById("piloto"); // piloto selected
let onOrOff =document.getElementById("buttonPower"); // buttonPower selected
let screen = document.getElementById("screen"); // screen selected

// let tvStatus = screen.classList.remove("channel" && e.target.id.slice(-1))
// screen.classList.add("screenBlack"); esto no funciona para que la screen sea "screenBlack" por encima de la class del cannel..

onOrOff.addEventListener('click', () => {

    screen.classList.remove(screen.classList[screen.classList.length - 1]) //to delete all existing channel class
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


