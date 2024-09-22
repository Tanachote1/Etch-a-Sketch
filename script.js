const gridBox = document.querySelector('.container');

let start = 2*2;
for(let i = 1; i <= start; i++){
    const row = document.createElement('div');
    row.className = "row";
    row.textContent = '';
    gridBox.appendChild(row);
    console.log(i)
};
// const column = document.createElement('div');
// column.textContent = '';
// column.className = "column";
// gridBox.appendChild(column);
