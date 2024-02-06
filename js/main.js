
let power = false; //because the tv starts off.

let pilot = document.getElementById("piloto"); // piloto selected
let onOrOff =document.getElementById("buttonPower"); // buttonPower selected
let screen = document.getElementById("screen"); // screen selected


function formattedTime() { //obtiene hora del sistema,
    const now = new Date(); //crea objeto de fecha
    const hours = now.getHours().toString().padStart(2, '0'); // obtain the hour from the date
    const minutes = now.getMinutes().toString().padStart(2, '0'); // calculate the hours and minutes defining 2 holds for value.
    return `${hours}:${minutes}`;
}
function formattedDate() {   //read the system time status
    const now = new Date(); //create the object "date"
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; //especifican que se debe incluir el día de la semana ('long'), el año, el nombre completo del mes y el día del mes.
    return now.toLocaleDateString('en-EN', options);
}

    

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
            const today = document.createElement('div');
            today.className = 'today';
            today.innerHTML = `<p>Channel ${e.target.id.slice(-1)}</p><p>${formattedTime()}</p><p>${formattedDate()}</p>`;
            screen.appendChild(today);
            setTimeout(() => {
                today.remove();
            }, 1200); //Show it for 1.2sec
            
        })
    }
)

