window.onload = function () {
    let preto = document.getElementById('preto');
    preto.className = 'color selected';
}

const paleta = document.getElementById('pixel-board');


function paletasDeCores() {
    for (let index = 0; index < 5; index += 1) {
        let quadradinhos = document.createElement('div');
        paleta.appendChild(quadradinhos);
        for (let index = 0; index < 5; index += 1) {
            let quadrados = document.createElement('div');
            quadrados.className = 'pixel';
            quadrados.addEventListener('click', pintar);
            quadradinhos.appendChild(quadrados);
        }
    }
}
paletasDeCores();

function pintar(event) {
    let selectedColor;
    for (let index in colors) {
        if (colors[index].className === 'color selected') {
            selectedColor = colors[index].style.backgroundColor;
        }
    }
    event.target.style.backgroundColor = selectedColor;
}

let px = document.getElementsByClassName('pixel');
let colors = document.getElementsByClassName('color');

function escolhido(event) {
    for (let index in colors) {
        if (colors[index].className === 'color selected') {
            colors[index].className = 'color';
        }
    }
    event.target.className = 'color selected';
}

for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', escolhido);
}


colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'blue';
colors[2].style.backgroundColor = 'red';
colors[3].style.backgroundColor = 'green';



let limpar = document.getElementById('clear-board');
function clearBoard() {
    for (let index = 0; index < px.length; index += 1) {
        px[index].style.backgroundColor = 'white';
    }
}
limpar.addEventListener('click', clearBoard); 