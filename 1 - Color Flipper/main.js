const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

button.addEventListener('click', () => {
    
    color.textContent = colors[getRandomInt(4)];
    body.style.backgroundColor = colors[getRandomInt(4)];



});