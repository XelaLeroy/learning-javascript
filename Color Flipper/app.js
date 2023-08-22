const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.querySelector('.btn');
const color = document.querySelector('.color');
const body = document.querySelector('body');

function getRandom(num) {
    return Math.floor(Math.random()*num);
};

button.addEventListener('click', () =>  {

let actualColor =  colors[getRandom(colors.length)];

color.textContent = actualColor ;
body.style.backgroundColor = actualColor;

});