// const gridBox = document.querySelector('.container');

// let input = 2;
// let start = 2;
// for(let i = 1; i <= start; i++){
//     const row = document.createElement('div');
//     row.className = "row";
//     row.textContent = '';
//     gridBox.appendChild(row);
    
// };

const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector('#sketch-area');
const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function changeBackroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide){
    const numOfSquares = (squaresPerSide * squaresPerSide)
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for(let i = 0; i < (numOfSquares); i++){
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeBackroundColor);
    };
};

function removeGridCells(){
    while (sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

createGridCells(4);