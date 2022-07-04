window.onload = function(){
    let inicioPreto = document.querySelector('.color')
    inicioPreto.classList.add('selected')
}

function aplicarCor(event) {
    let selecionado = document.querySelector('.selected')
    let cor = selecionado.style.backgroundColor
    console.log(selecionado.id);
    event.target.style.backgroundColor = selecionado.id;
}




let quadrados = document.getElementById('pixel-board')
for (let i = 0; i < 5; i += 1) {
    for (let i = 0; i < 5; i += 1) {
        let criarDiv = document.createElement('div');
        criarDiv.className = 'pixel';
        criarDiv.addEventListener('click', aplicarCor)
        quadrados.appendChild(criarDiv);
    }
}

let preto = document.getElementsByClassName('color')[0]
let vermelho = document.getElementsByClassName('color')[1]
let azul = document.getElementsByClassName('color')[2]
let verde = document.getElementsByClassName('color')[3]



function cor(event) {
    let select = document.querySelector('.selected')
    select.classList.remove('selected')
    event.target.classList.add('selected')
}


preto.addEventListener('click', cor)
vermelho.addEventListener('click', cor)
azul.addEventListener('click', cor)
verde.addEventListener('click', cor)


