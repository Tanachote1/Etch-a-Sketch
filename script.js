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
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector('#sketch-area');
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function createGridCells(){
    for(let i = 0; i < (rows * cols); i++){
        const gridCell = document.createElement('div');
        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
    };
};

createGridCells();