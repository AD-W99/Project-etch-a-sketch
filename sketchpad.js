/* Code for creating the initial grid. */

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
            if (colorRed.value < 0) {
                colorRed.value = 0;
            }
            if (colorGreen.value < 0) {
                colorGreen.value = 0;
            }
            if (colorBlue.value < 0) {
                colorBlue.value = 0;
            }

            if (colorRed.value > 255) {
                colorRed.value = 255;
            }
            if (colorGreen.value > 255) {
                colorGreen.value = 255;
            }
            if (colorBlue.value > 255) {
                colorBlue.value = 255;
            }

            e.target.style.backgroundColor = `rgb(${colorRed.value}, ${colorGreen.value}, ${colorBlue.value})`;
        } else {
            e.target.style.backgroundColor = "whitesmoke";
        }
    });
}

makeGrid();

/* Code for clear button. */

let divList = document.getElementsByClassName('square');

clearButton.addEventListener('click',() => {
    for (i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = "whitesmoke";
    }
});

/* Code for slider control. */

let slider = document.querySelector('.gridValueButton');
let sliderDisplay = document.querySelector('.gridValueDisplay');

sliderDisplay.textContent = `${slider.value}x${slider.value}`;
slider.oninput = () => {
    sliderDisplay.textContent = `${slider.value}x${slider.value}`;
    gridDimensions = slider.value;
}

/* Code for remaking grid. */

let remakeGridButton = document.querySelector('.remakeGrid');

remakeGridButton.addEventListener('click', () => {
    for (i = 0; i < divList.length; i++) {
        divList[i].style.backgroundColor = "whitesmoke";
    }
    makeGrid();
});

/* Code for erase button. */

let eraseButton = document.querySelector('.eraseButton');

eraseButton.addEventListener('click', () => {
    isEraseTrue = !isEraseTrue;

    if (isEraseTrue) {
        eraseButton.style.backgroundColor = "#5cd5eb"
    } else {
        eraseButton.style.backgroundColor = "#313639"
    }
});

/* Code for displaying chosen RGB color. */

const rgbColorPicker = document.querySelector('.rgb');
const colorRed = document.querySelector('.color-red');
const colorGreen = document.querySelector('.color-green');
const colorBlue = document.querySelector('.color-blue');

function changeColorPicker() {
    rgbColorPicker.style.color = `rgb(${colorRed.value}, ${colorGreen.value}, ${colorBlue.value})`;
}

colorRed.onchange = () => {
    changeColorPicker();
}

colorGreen.onchange = () => {
    changeColorPicker();
}

colorBlue.onchange = () => {
    changeColorPicker();
}