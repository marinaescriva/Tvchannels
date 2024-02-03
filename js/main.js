
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let screen = document.getElementById("screen")

let power = false;

document.getElementById("onOff").addEventListener(("click",()) =>{

    screen.classList.remove(screenClassList)
    screen.classList.add("buttonPower" + ())
})

    power = !power;
        
    arrayButtons.map(
        item => {
            item.addEventListener("click", (evento) => {
                
                screen.classList.remove(screen.classList[screen.classList.length - 1])
                screen.classList.add("canal" + evento.target.id.slice(-1))
            })
        }
    )

            
        

 
//probando el botón power

