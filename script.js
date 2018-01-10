let squareLimit = 256;

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
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', pink));

  function pink() {
    this.style.backgroundColor = '#FFB6C1';
  }
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
  let box = document.querySelector('#box');
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  canvas();
}

