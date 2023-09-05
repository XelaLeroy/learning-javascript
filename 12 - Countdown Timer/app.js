const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let date = new Date();
date.setDate(date.getDate() + 10);


const year = date.getFullYear();
const month = months[date.getMonth()];
const day = weekdays[date.getDay()];
const dateNumber = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

giveaway.textContent = `Le concours se termine le  ${day} ${dateNumber} ${month} ${year} à ${hours}:${minutes}`


const futureTime = date.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeRemaining = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;


 const daysRemaining = Math.floor(timeRemaining / oneDay)
 const hoursRemaining = Math.floor((timeRemaining % oneDay) / oneHour) 
 const minutesRemaining = Math.floor((timeRemaining % oneHour)/oneMinute) 
 const secondsRemaining = Math.floor((timeRemaining % oneMinute)/1000) 

 const values = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining]

 console.log(values);



 // 1s = 1000ms
  // 1m = 60s
  // 1h = 60min
  // 1day = 24h

  // Ajouter un 0 devant les item à un seul chiffre (4 heures = 04 heures)


  function format(item) {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }

  // index = index de l'item dans l'array crée par le forEach
items.forEach((item,index) =>{
  item.innerHTML = format(values[index]);
});

if (timeRemaining < 0){
 clearInterval(countdown);
deadline.innerHTML = `<h4 class=expired> Désolé, ce tirage est terminé désormais</h4>`}
}

let countdown = setInterval(getRemainingTime,1000);

window.onload