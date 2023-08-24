// classList - shows/gets all classes
const button = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');


// contains - checks classList for specific class
button.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar') 
    
});

closeBtn.addEventListener('click' , () => {
    sidebar.classList.remove('show-sidebar')
})
// add - add class
// remove - remove class
// toggle - toggles class