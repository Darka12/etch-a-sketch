const container = document.getElementById("container");
const resetBtn = document.getElementById('reset-button');


function createGrid() {
  for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cellClass');
    cell.style.border = '1px solid black';
    container.appendChild(cell);
  }
}

function createColors() {
  let gridCells = document.querySelectorAll('div.cellClass');
  gridCells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
      cell.style.background = 'black';
      cell.style.border = '1px solid black';
    })
  })
}

function resetGrid() {
  let gridCells = document.querySelectorAll('div.cellClass');
  gridCells.forEach(cell => {
    cell.style.background = 'white';
  })
  
}

createGrid()
createColors()

