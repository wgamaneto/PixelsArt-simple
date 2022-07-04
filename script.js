//criar divs pelo for loop
const main = document.querySelector('main');

let criarDivs = '';

for (let caixas = 0; caixa <= 10; caixas += 1) {
    criarDivs += `<div>${caixas}</div>`;
}

main.innerHTML = criarDivs;