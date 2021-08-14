const container = document.getElementById("container");

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cellClass');
    cell.style.border = '1px solid black';
    container.appendChild(cell);
  }
}

createGrid()
