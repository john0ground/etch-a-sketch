
const container = document.querySelector('.container');
const rgbBtn = document.getElementById('rgb');
const clearBtn = document.getElementById('clear');
const UserColorChoice = document.getElementById('user-color-choice');
let numberOfSquares = 95 * 95;

for (let i = 0; i < numberOfSquares; i++) {
    const squares = document.createElement('div');
    squares.classList.add('square');
    container.style.gridTemplateColumns = 'repeat(95, 1fr)'
    container.appendChild(squares);
}

let colorMode = '';
rgbBtn.addEventListener('click', () => {colorMode = 'rgb'});
clearBtn.addEventListener('click', () => {
    allSquares.forEach(square => square.style.background = 'none')
});
UserColorChoice.addEventListener('input', () => {colorMode = 'input-color'}); 


function changeColor(e) {
    if(colorMode === 'rgb') {
        e.currentTarget.style.background = randomColor();
    } else if(colorMode === 'input-color') {
        const colorChoice = UserColorChoice.value;
        e.currentTarget.style.background = colorChoice;
    } else {e.currentTarget.style.background = 'black';}
}

function rgbInteger() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    const r = rgbInteger();
    const g = rgbInteger();
    const b = rgbInteger();
    return `rgb(${r}, ${g}, ${b})`
}


const allSquares = document.querySelectorAll('.square');
allSquares.forEach(square => square.addEventListener('mouseover', changeColor));


