// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const video = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const preloader = document.querySelector('.preloader');

let btn = true;

switchBtn.addEventListener('click',() => {
     if(btn){
    video.pause();
    btn = false;
    switchBtn.classList.toggle('slide');
    } else {
        video.play()
        btn = true;
        switchBtn.classList.toggle('slide');
    }
});

window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
  })

