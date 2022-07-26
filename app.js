const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

function addHoverEffect(e) {
    this.classList.add('hover');
}

for (let i=0; i<16; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', addHoverEffect)
    container.appendChild(div);
}

