// const gridBox = document.querySelector('.container');

// let input = 2;
// let start = 2;
// for(let i = 1; i <= start; i++){
//     const row = document.createElement('div');
//     row.className = "row";
//     row.textContent = '';
//     gridBox.appendChild(row);
    
// };

// const border
const GRIDSIDE = 600;
// let cell
let squaresPerSide = 16;

const sketchArea = document.querySelector('#sketch-area');
const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const resetButton = document.querySelector('.reset');
const eraserButton = document.querySelector('.eraser');

// This show Resolution
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

// This hover background color
function changeBackroundColor() {
    this.style.backgroundColor = "black";
    drag = true;
}

// This create cell
function createGridCells(squaresPerSide){
    const numOfSquares = (squaresPerSide * squaresPerSide)
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for(let i = 0; i < (numOfSquares); i++){
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
        // 'This' what it came from 
        gridCell.addEventListener('mouseover', changeBackroundColor);

    };
};

// This function remove current cell

function removeGridCells(){
    while (sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

// This resetGrid by remove then create
function resetGrid() {
    removeGridCells();
    createGridCells(16);
}

resetButton.addEventListener('click', resetGrid);

// This change gridCell
slider.oninput = function () {
    let txt = `${this.value} X ${this.value} (Resoultion)`;
    sliderValue.textContent =txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells(16);