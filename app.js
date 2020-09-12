const box = document.querySelector('.box');

let topLeft = document.querySelector('#top-left');
let bottomLeft = document.querySelector('#bottom-left');
let topRight = document.querySelector('#top-right');
let bottomRight = document.querySelector('#bottom-right');

topLeft.oninput = function () {
    box.style.borderTopLeftRadius = `${this.value}%`
    document.getElementById('top-left-value').textContent = `${this.value}%`
}

bottomLeft.oninput = function () {
    box.style.borderBottomLeftRadius = `${this.value}%`
    document.getElementById('bottom-left-value').textContent = `${this.value}%`
}

topRight.oninput = function () {
    box.style.borderTopRightRadius = `${this.value}%`
    document.getElementById('top-right-value').textContent = `${this.value}%`
}

bottomRight.oninput = function () {
    box.style.borderBottomRightRadius = `${this.value}%`
    document.getElementById('bottom-right-value').textContent = `${this.value}%`
}