let grid = 16;
let squareLimit = grid * grid;
let randomValue = () => Math.floor(Math.random() * 255);

function canvas() {
  for (var i = 0; i < squareLimit; i++) {
    let box = document.querySelector('#box');
    let square = document.createElement('div');
    square.className = 'square';
    box.appendChild(square);
  }
  draw();
}

function draw() {
  let box = document.querySelector('#box');
  box.style["grid-template-columns"] = `repeat(${grid}, 1fr)`;
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', pink))
}

function pink() {
  this.style.backgroundColor = '#FFB6C1';
}
function purple() {
  this.style.backgroundColor = 'rgb(219, 185, 236)';
}
function random() {
  this.style.backgroundColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

const purpleButton = document.querySelector('#purple');
purpleButton.addEventListener('click', togglePurple);

function togglePurple() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', purple));
}

const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', toggleRandom);

function toggleRandom() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', random));
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
  let box = document.querySelector('#box');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  grid = prompt(`Change grid dimensions. Currently ${grid}.`, 16);
  squareLimit = grid * grid;
  canvas();
}

canvas();