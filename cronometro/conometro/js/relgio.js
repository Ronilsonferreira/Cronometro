const minutosIA = document.querySelector("#minutos")
const segundosIA = document.querySelector("#segundos")
const milisegundosIA = document.querySelector("#milisegundos")
const bntStart = document.querySelector("#btnStart")
const btnPause = document.querySelector("#btnPause")
const btnContinue = document.querySelector("#btnContinue")
const btnReset = document.querySelector("#btnReset")

let interval = 0
let minutos = 0
let segundos = 0
let milisegundos = 0
let Ispaused= false

bntStart.addEventListener('click',start)
btnPause.addEventListener('click',pauseTempo)
btnContinue.addEventListener('click',continueTempo)
btnReset.addEventListener('click',resetTempo)


function start(){

    interval = setInterval(()=>{
        if(!Ispaused){
            milisegundos +=10
            if(milisegundos===1000){
                segundos +=1
                milisegundos = 0
            }
            if(segundos== 60){
                minutos +=1
                segundos = 0
            }
                milisegundosIA.textContent = milisegundos
                segundosIA.textContent = segundos
                minutosIA.textContent = minutos
            

        }



    },10)

    bntStart.style.display ="none"
    btnPause.style.display ="block"
}



function pauseTempo(){
    Ispaused = true
    btnPause.style.display = "none"
    btnContinue.style.display = "inline-block"
}

function continueTempo(){
    Ispaused = false
    btnPause.style.display = "block"
    btnContinue.style.display = "none"
}

function resetTempo(){

    clearInterval(interval)
minutos = 0
segundos = 0
milisegundos = 0

   Ispaused = false
   btnPause.style.display = "none"
   bntStart.style.display ="block"
   btnContinue.style.display ="none"

   milisegundosIA.textContent = milisegundos
   segundosIA.textContent = segundos
   minutosIA.textContent = minutos

}