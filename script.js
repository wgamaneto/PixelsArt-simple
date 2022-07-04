let paleta = document.getElementsByClassName('color');
console.log(paleta)
paleta[1].style.backgroundColor = 'red'
paleta[2].style.backgroundColor = 'blue'
paleta[3].style.backgroundColor = 'green'


let quadrados = document.getElementById('pixel-board')
for (let index = 1; index <= 5; index += 1){
        let criarDivs = document.getElementById('div');
        criarDivs.className = 'pixel'
        quadrados.appendChild(criarDivs)
    }   
    
