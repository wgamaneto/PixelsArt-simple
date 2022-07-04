window.onload = function () {
    let corPreta = document.querySelector('.color')
    corPreta.classList.add('selected')
    corSurpresa();
}


function colorir(event) {
    let selecionado = document.querySelector('.selected')
    let cor = selecionado.style.backgroundColor
    event.target.style.backgroundColor = cor;
}

function quadrado(event) {
    let quadroPixels = document.getElementById('pixel-board')
    for (let index = 0; index < event; index += 1) {
        for (let x = 0; x < event; x += 1) {
            let criarDiv = document.createElement('div');
            criarDiv.className = 'pixel';
            criarDiv.style.backgroundColor = 'white'
            criarDiv.addEventListener('click', colorir)
            quadroPixels.appendChild(criarDiv);
        }
    }
}
quadrado(5);

let cor0 = document.getElementsByClassName('color')[0]
let cor1 = document.getElementsByClassName('color')[1]
let cor2 = document.getElementsByClassName('color')[2]
let cor3 = document.getElementsByClassName('color')[3]

cor0.style.backgroundColor = 'black'


cor0.addEventListener('click', mudaClasse)
cor1.addEventListener('click', mudaClasse)
cor2.addEventListener('click', mudaClasse)
cor3.addEventListener('click', mudaClasse)

function mudaClasse(event) {
    let selecionar = document.querySelector('.selected')
    selecionar.classList.remove('selected')
    event.target.classList.add('selected')
}




function criaBotao() {
    let botao = document.createElement('button')
    botao.innerText = 'Limpar'
    botao.id = 'clear-board'
    let container = document.getElementById('buttons-container')
    container.appendChild(botao)
}
criaBotao();


function corRandom() {
    let aleatorio = 'rgb' + '(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() *255)) + ')'
    return aleatorio;
}

function corSurpresa() {
    let cores = document.getElementsByClassName('color')
    for (let index = 0; index < cores.length; index += 1) {
        if (cores[index].style.backgroundColor !== 'black') {
            cores[index].style.backgroundColor = corRandom();
        }
    }
}


