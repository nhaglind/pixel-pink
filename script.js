let grid = 16;
let squareLimit = grid * grid;

function canvas() {
  for (var i = 0; i < squareLimit; i++) {
    let box = document.querySelector('#box');
    let square = document.createElement('div');
    square.className = 'square';
    box.appendChild(square);
  }
  draw();
}

canvas();

function draw() {
  //let box = document.querySelector('#box');
  //box.style.​gridTemplateColumns = `repeat(${grid}, 1fr)`;
  //box.style.​gridTemplateRows = `repeat(${grid}, 1fr)`;
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', pink))
}

function pink() {
  this.style.backgroundColor = '#FFB6C1';
}
function purple() {
  this.style.backgroundColor = 'rgb(219, 185, 236)';
}

const purpleButton = document.querySelector('#purple');
purpleButton.addEventListener('click', togglePurple);

function togglePurple() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', purple));
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
  let box = document.querySelector('#box');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  grid = prompt(`Change grid. Currently ${grid} x ${grid}.`);
  squareLimit = grid * grid;
  canvas();
}

