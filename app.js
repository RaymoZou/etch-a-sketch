const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

function addHoverEffect(e) {
    this.classList.add('hover');
}

function createGrid(numRows) {

    deleteChildren();

    if (numRows > 100) return;
    
    let gridSize = Math.pow(numRows, 2);

    for (let i=0; i<gridSize; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', addHoverEffect)
        div.style.height = (400/numRows - 3) + "px";
        div.style.width = (400/numRows - 3) + "px";
        container.appendChild(div);
    }
}

function readInput() {
    const gridSize = prompt('Enter a grid size from 1-100: ');
    createGrid(gridSize);
}

function deleteChildren() {
    const container = document.querySelector('.container');
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);  
    }
}

function clearBoard() {
    const divs = document.querySelectorAll('.container div');
    console.log(divs);
    divs.forEach(div => {
        div.classList.remove("hover");
    })
}

createGrid(4);


