let squareLimit = 256;

for (var i = 0; i < squareLimit; i++) {
  let box = document.querySelector('#box');
  let square = document.createElement('div');
  square.className = 'square';
  box.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', draw));

function draw() {
  this.style.backgroundColor = '#FFB6C1';
}