let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")


let positionX = 210
let largeurRaquette = 80
let hauteurRaquette = 20
let positionY = canvas.height - hauteurRaquette
let posXBalle = 250
let rayonXBalle = 10
let rayonYBalle = 10
let posYBalle = canvas.height - hauteurRaquette - rayonXBalle
let vitesseXBalle = 5
let vitesseYBalle = 5
let balleBouge = false
let posXSouris
document.addEventListener("mousemove", moveHandler)
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {

    if (event.code == "Space") {
        balleBouge = true
    }
}


function moveHandler(event) {

    posXSouris = event.clientX - canvas.offsetLeft - largeurRaquette / 2
    positionX = posXSouris
    if (posXSouris > canvas.clientWidth - largeurRaquette) {
        positionX = canvas.width - largeurRaquette
    }

    if (posXSouris < 0) {
        positionX = 0
    }
    if (balleBouge == false) {
        posXBalle = posXSouris + largeurRaquette / 2
    }
    if (posXSouris < 0 && balleBouge === false) {
        posXBalle = largeurRaquette / 2
    }
    if (posXSouris > canvas.clientWidth - largeurRaquette && balleBouge === false) {
        posXBalle = canvas.clientWidth - largeurRaquette / 2
    }

}



requestAnimationFrame(boucle)

function boucle() {
    context.clearRect(0, 0, 500, 500)
    update()
    draw()
    requestAnimationFrame(boucle)
}
function update() {
    if (balleBouge == true) {
        posXBalle = posXBalle += vitesseXBalle
        posYBalle = posYBalle -= vitesseYBalle
    }
    if (posXBalle > canvas.width) {
        vitesseXBalle = -  vitesseXBalle
    } else {
    }

    if (posYBalle < 0) {
        vitesseYBalle = - vitesseYBalle
    } else {
    }

    if (posXBalle < 0) {
        vitesseXBalle = - vitesseXBalle
    } else {
    }

    if (posYBalle > canvas.height - hauteurRaquette - rayonXBalle  && posXBalle > positionX && posXBalle < positionX + largeurRaquette - rayonXBalle*2) {
        posYBalle = canvas.height - hauteurRaquette - rayonXBalle
        vitesseYBalle = - vitesseYBalle
    }
    if (posYBalle > canvas.height) {
        balleBouge = false
        posXBalle = positionX + largeurRaquette / 2
    }
}
function draw() {

    context.beginPath()
    context.ellipse(posXBalle, posYBalle, rayonXBalle, rayonYBalle, 0, 0, 2 * Math.PI)
    context.fill()


    context.fillStyle = 'yellow'
    context.fillRect(positionX, positionY, largeurRaquette, hauteurRaquette)

}