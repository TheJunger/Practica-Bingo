const playerNumContainer = document.querySelector(".numerosplayer")
const cpuNumContainer = document.querySelector(".numeroscpu")
const ballButton = document.querySelector(".botonCentral")
const player = document.querySelector(".player")
const cpu = document.querySelector(".cpu")
const tablero = document.querySelector(".down")
const numTablero = document.querySelector(".ncont")
let numerosplayer = []
let numeroscpu = []
let numerosball = []

const numeroRandom = () =>{
    numRand = Math.random()*89
    numRound = Math.round(numRand)
    numFinal = Math.floor(numRound + 1)
}

const numerosBall = () =>{
    for(let b = 1; b <= 90; b++){
        numeroRandom()
        if (numerosball.includes(numFinal)){
            console.log("Numero duplicado en la Bolera, Generando uno nuevo")
            console.log(numFinal)
            b--
        }
        else {
            numerosball.push(numFinal)
        }
    }
}

const createNumbersCarton = () =>{

    for (let i = 1; i <= 15; i++) {
        numeroRandom()
        if (numerosplayer.includes(numFinal)){
            console.log("Numero duplicado Player, Generando uno nuevo")
            console.log(numFinal)
            i--
        }
        else {
            let numPlayer = document.createElement("p")
            numPlayer.classList.add("numerosplayer")
            numPlayer.classList.add("numerosplayer"+i)
            playerNumContainer.appendChild(numPlayer)
            numerosplayer.push(numFinal)
            numPlayer.textContent = numFinal  
        }
    }

    for (let a = 1; a <= 15; a++) {
        numeroRandom()
        if (numeroscpu.includes(numFinal)){
            console.log("Numero duplicado Cpu, Generando uno nuevo")
            console.log(numFinal)
            a--
        }
        else {
            let numCpu = document.createElement("p")
            numCpu.classList.add("numeroscpu")
            numCpu.classList.add("numeroscpu"+a)
            cpuNumContainer.appendChild(numCpu)
            numeroscpu.push(numFinal)
            numCpu.textContent = numFinal
        }
    }

}

const numerosTablero = () =>{
    //numeroRandom()
    let numT = document.createElement("p")
    numT.classList.add("numTab")
    numT.classList.add("numTab"+x)
    numTablero.appendChild(numT)
    numT.textContent = numerosball[nb]
    comprobacion()
    nb++
    x++
}

let checkwinner = () =>{
    if (pw == 15) {
        console.log("Player ha ganado")
        ballButton.textContent = "Player ha ganado"
        ballButton.style.userSelect = "none"
    }
    if (cw == 15) {
        console.log("Cpu ha ganado")
        ballButton.textContent = "Cpu ha ganado"
        ballButton.style.userSelect = "none"
    }
    else{
        numerosTablero()
    }

}
let comprobacion = () =>{
    numerosplayer.forEach( numeros =>{
        if (numeros == numerosball[nb]){
            console.log("Numero encontrado Player")
            console.log("Pocision: " + numerosplayer.indexOf(numeros))
            console.log(numerosball[nb])
            let position = numerosplayer.indexOf(numeros) + 1
            let realposition = numerosplayer.indexOf(numeros)
            let info = document.querySelector(".numerosplayer"+position)
            let tablerocolor = document.querySelector(".numTab"+x)
            info.style.backgroundColor = "green"
            tablerocolor.style.backgroundColor = "green"
            if (numerosplayer.includes(numerosball[nb])) {
                numerosplayer.splice(realposition, 1, "Numero encontrado")
                pw++
            }
        }
    })
    numeroscpu.forEach( numeros =>{
        if (numeros == numerosball[nb]){
            console.log("Numero encontrado Cpu")
            console.log("Pocision: " + numeroscpu.indexOf(numeros))
            console.log(numerosball[nb])
            let position = numeroscpu.indexOf(numeros) + 1
            let info = document.querySelector(".numeroscpu"+position)
            let realposition = numeroscpu.indexOf(numeros)
            let tablerocolor = document.querySelector(".numTab"+x)
            info.style.backgroundColor = "red"
            tablerocolor.style.backgroundColor = "red"
            if (numeroscpu.includes(numerosball[nb])) {
                numeroscpu.splice(realposition, 1, "Numero encontrado")
                cw++
            }
        }
    })

}
nb=0
cw=0
pw=0
ballButton.addEventListener("click", ()=>{
    if (ballButton.textContent == "Empezar partida"){
        createNumbersCarton()
        player.style.opacity = 1
        cpu.style.opacity = 1
        ballButton.textContent = "Sacar Numero"
        tablero.style.opacity = 1
        x = 0
        ballButton.style.userSelect = "none"
        numerosBall()
    }
    else if (ballButton.textContent == "Player ha ganado") {
        console.log("No se pueden seguir sacando numeros")
    }
    else if (ballButton.textContent == "Cpu ha ganado") {
        console.log("No se pueden seguir sacando numeros")
    }
    else {
            checkwinner()
        }
})