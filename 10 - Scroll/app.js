// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const showLinks = document.querySelector('.show-links');

toggleBtn.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if ( containerHeight === 0 ) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;

  }
});

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const navHeight = nav.getBoundingClientRect().height
if (scrollHeight > navHeight) {
   nav.classList.add("fixed-nav");
   topLink.classList.add('show-link');
} else {
  nav.classList.remove("fixed-nav");
  topLink.classList.remove('show-link');


}
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // previent les défauts et bloque le comprotement (clic sur le lien ici)
     e.preventDefault();
    // navigate to a specific spot , splice permet d'éviter de prendre le # au lieu d'avoir #about nous aurons about
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
     const navHeight = navbar.getBoundingClientRect().height;
     const containerHeight = linksContainer.getBoundingClientRect().height;
     const fixedNav = navbar.classList.contains('fixed-nav');
     let position = element.offsetTop  - navHeight ;

    if(!fixedNav) {
       position = position - navHeight ;
     }
     if(navHeight > 82){
      position = position + containerHeight;
     }
  window.scrollTo({
    left: 0,
    top  : position,

  });
  linksContainer.style.height = 0;

  })

})