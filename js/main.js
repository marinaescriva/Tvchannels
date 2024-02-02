
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let screen = document.getElementById("screen")

let power = false;

document.getElementById("onOff").addEventListener("click", powerSwitch()) {
             buttonPower = !power  

             if(power){
             

arrayButtons.map(
    item => {
        item.addEventListener("click", (evento) => 
            if(power){
            
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("canal" + evento.target.id.slice(-1))
        })
    }
)
}
}
 
//probando el botón power

