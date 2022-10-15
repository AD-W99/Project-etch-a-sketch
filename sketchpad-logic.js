const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clearButton');
let gridDimensions = 16;

function makeGrid() {
    for (i = 0; i < (gridDimensions ** 2); i++) {
        div = document.createElement('div');
        div.style.backgroundColor = "grey";
        div.classList.add('square');
        gridContainer.appendChild(div);
        gridContainer.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = "black";
        });
        gridContainer.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
    }
}

makeGrid();

let divList = document.getElementsByClassName('square');

clearButton.addEventListener('click',() => {
    for (i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = "grey";
    }
});

let slider = document.querySelector('.gridValueButton');
let sliderDisplay = document.querySelector('.gridValueDisplay');

sliderDisplay.textContent = `${slider.value}x${slider.value}`;
slider.oninput = () => {
    sliderDisplay.textContent = `${slider.value}x${slider.value}`;
    gridDimensions = slider.value;
}

let remakeGridButton = document.querySelector('.remakeGrid');

remakeGridButton.addEventListener('click', () => {
    for (i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = "grey";
    }
    makeGrid();
});