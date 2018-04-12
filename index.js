const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');
const changeGridButton = document.querySelector('#change-grid');
const changeColor = document.querySelector('#change-color');
const changeOpacity = document.querySelector('#change-opacity');
let size = 16;

createGrid(size, size);

changeGridButton.addEventListener('click', changeSize);

function changeSize(){
  size = prompt("Please enter a new grid size (16-64)", 16);
  while(isNaN(size) || size > 64 || size < 16){
    size = prompt("Invalid size. Try again.", 16);
  }
  let rows = document.querySelectorAll('.flex-row');
  rows.forEach((element) => gridContainer.removeChild(element));
  createGrid(size, size);
}

function resetGrid(blocks){
  resetButton.addEventListener('click', function(){
    blocks.forEach((block) => {
      block.style.backgroundColor = 'white';
    });
  })
}

function colorBlocks(blocks){
  blocks.forEach((block) => {
    block.addEventListener('mouseover', function(){
      let color = changeColor.value;
      let opacity = changeOpacity.value;
      if(color === 'rand'){
        block.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
      block.style.backgroundColor = color;
      block.style.opacity = opacity;
    });
  })
}

function createGrid(width, length){
  var gridRow = width;
  var gridCol = length;
  for (var i = 1; i <= gridRow; i++) {
    var gridRowBlock = document.createElement('div');
    gridRowBlock.className = 'flex-row';
    gridContainer.appendChild(gridRowBlock);
    for (var j = 1; j <= gridCol; j++) {
      var gridColBlock = document.createElement('div');
      gridColBlock.className = 'flex-item';
      gridRowBlock.appendChild(gridColBlock);
    }
  }
  let blocks = document.querySelectorAll('.flex-item');
  colorBlocks(blocks);
  resetGrid(blocks);
}
