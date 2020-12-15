const images = document.getElementById("page-1")
var nimg = 2

function mudarImagem() {
    setTimeout(opacidade, 4200);
    if(nimg == 3) {
        images.style.backgroundImage = `url(./assets/img/carro${nimg}.webp)`
        images.style.opacity = "1"
        nimg = 1

        
    } else {
        images.style.backgroundImage = `url(./assets/img/carro${nimg}.webp)`
        images.style.opacity = "1"
        nimg += 1
    }
}

function opacidade() {
    images.style.opacity = "0.5"
}

setInterval(mudarImagem, 5000)

