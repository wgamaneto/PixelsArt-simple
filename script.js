const paleta = document.getElementById('pixel-board');
const inputs = document.getElementById('board-size');
const btnVqv = document.getElementById('generate-board');

function pintar(event) {
  let selectedColor;
  for (const index in colors) {
    if (colors[index].className === 'color selected') {
      selectedColor = colors[index].style.backgroundColor;
    }
  }
  event.target.style.backgroundColor = selectedColor;
}

function paletasDeCores(valor) {
  for (let index = 0; index < valor; index += 1) {
    const quadradinhos = document.createElement('div');
    paleta.appendChild(quadradinhos);
    for (let i = 0; i < valor; i += 1) {
      const quadrados = document.createElement('div');
      quadrados.className = 'pixel';
      quadrados.addEventListener('click', pintar);
      quadradinhos.appendChild(quadrados);
    }
  }
}
paletasDeCores(5);

let colors = document.getElementsByClassName('color');

function gerarCor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}
colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = gerarCor();
colors[2].style.backgroundColor = gerarCor();
colors[3].style.backgroundColor = gerarCor();

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

// const corRandom = (Math.floor(Math.random() * 255));
// console.log(corRandom);

const px = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');

function clearBoard() {
  for (let index = 0; index < px.length; index += 1) {
    px[index].style.backgroundColor = 'white';
  }
}
limpar.addEventListener('click', clearBoard);

function tamanho() {
  paleta.innerHTML = '';
  if (inputs.value >= 5 && inputs.value <= 50) {
    paletasDeCores(inputs.value);
  } else if (inputs.value > 50) {
    paletasDeCores(50);
  } else if (inputs.value < 5) {
    paletasDeCores(5);
  }
}
btnVqv.addEventListener('click', tamanho);

function invalido() {
  if (inputs.value) {
    tamanho();
  } else {
    return alert('Board inválido!');
  }
}

btnVqv.addEventListener('click', invalido);

window.onload = function () {
  const preto = document.getElementById('preto');
  preto.className = 'color selected';
};
