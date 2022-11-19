
const container = document.querySelector('.container');
const sketch = document.getElementById('sketch');
const rgbBtn = document.getElementById('rgb');
const eraser = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const userColorChoice = document.getElementById('user-color-choice');

const sliderValue = document.getElementById('value');
const slider = document.getElementById('myRange');
const sizeBar = document.getElementById('sizebar');

let size = 50;

const grid = document.getElementById('grid');
function setupGrid() {
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
setupGrid();

slider.oninput = function() {
    sizeBar.style.height = `calc(512px / ${size})`
    sliderValue.textContent = this.value;
    size = (101 - this.value);

    const removeSquares = document.querySelectorAll('.square');
    removeSquares.forEach(square => square.remove());
    
    grid.removeAttribute('style');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    placeSquares();

    const newSquares = document.querySelectorAll('.square');
    newSquares.forEach(square => square.addEventListener('mouseover', changeColor));
    clearBtn.addEventListener('click', () => {
        newSquares.forEach(square => square.style.background = 'none');
    });
}

function placeSquares() {
    const numberOfSquares = size * size;
    for (let i = 0; i < numberOfSquares; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
}
placeSquares();

let colorMode = '';
rgbBtn.addEventListener('click', () => {colorMode = 'rgb'});
sketch.addEventListener('click', () => {colorMode = 'sketch'});
userColorChoice.addEventListener('input', () => {colorMode = 'input-color'});
eraser.addEventListener('click', () => {colorMode = 'eraser'});

clearBtn.addEventListener('click', () => {
    allSquares.forEach(square => square.style.background = 'none');
});


function changeColor(e) {
    if(colorMode === 'rgb') {
        e.currentTarget.style.background = randomColor();
    } else if(colorMode === 'input-color') {
        const colorChoice = userColorChoice.value;
        e.currentTarget.style.background = colorChoice;
    } else if(colorMode === 'eraser') {
        e.currentTarget.style.background = 'none';
    } else if(colorMode === 'sketch') {
        e.currentTarget.style.background = 'black';
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






