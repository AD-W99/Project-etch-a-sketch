const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clearButton');
let gridDimensions = 16;
let isEraseTrue = false;

function makeGrid() {
    for (i = 0; i < (gridDimensions ** 2); i++) {
        div = document.createElement('div');
        div.style.backgroundColor = "whitesmoke";
        div.classList.add('square');
        gridContainer.appendChild(div);
    }

    gridContainer.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
    gridContainer.addEventListener('mouseover', function(e){
        if (!isEraseTrue) {
            e.target.style.backgroundColor = "#313639";
        } else {
            e.target.style.backgroundColor = "whitesmoke";
        }
    });
}

makeGrid();

let divList = document.getElementsByClassName('square');

clearButton.addEventListener('click',() => {
    for (i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = "whitesmoke";
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
        divList[i].style.backgroundColor = "whitesmoke";
    }
    makeGrid();
});

let eraseButton = document.querySelector('.eraseButton');

eraseButton.addEventListener('click', () => {
    isEraseTrue = !isEraseTrue;

    if (isEraseTrue) {
        eraseButton.style.backgroundColor = "#5cd5eb"
    } else {
        eraseButton.style.backgroundColor = "#313639"
    }
})