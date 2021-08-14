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

function newGrid() {
  const container = document.getElementById("container");
  do {
   userChoice = parseInt(window.prompt("Please choose a grid size by entering a number between 1 and 100", ""), 10);} while(isNaN(userChoice) || userChoice > 100 || userChoice < 1);

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  let size = userChoice * userChoice;

  for (let i = 0; i < size; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cellClass');
    cell.style.border = '1px solid black';
    container.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    container.appendChild(cell);
  }
}

createGrid()
createColors()

