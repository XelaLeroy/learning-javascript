// classList - shows/gets all classes
const button = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// contains - checks classList for specific class
button.addEventListener('click', () => {
    links.classList.toggle('show-links') 
    
})
// add - add class
// remove - remove class
// toggle - toggles class