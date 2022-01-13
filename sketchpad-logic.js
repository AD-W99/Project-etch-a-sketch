/* https://stackoverflow.com/questions/57546807/how-to-pass-in-a-variable-to-the-css-grid-repeat-function */

const gridContainer = document.querySelector('.grid-container');

function onStartUp() {
    for (i = 0; i < 256; i++) {
        div = document.createElement('div');
        div.style.backgroundColor = "grey";
        div.style.border = "1px solid black";
        gridContainer.appendChild(div);
    }
}

onStartUp();