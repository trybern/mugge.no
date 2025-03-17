const now = new Date();
let year = now.getFullYear();
let targetDate = new Date(year, 6 - 1, 1); // måned er 0-indeks

checkDate();

console.log("Neste muggedag: ", new Date(targetDate).toDateString());
  
function countDown(target, current) {
  const timeDifference = target - current;
    // Tell dager, timer, minutter og sekunder
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Angi tid
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

function checkDate() {

  const currentDate = new Date();

  // Sjekk om det er muggedagen
  if (currentDate.toDateString() === targetDate.toDateString()) {
    
    document.getElementById("nedtelling").innerHTML = `<h2 class="feiring">Gratulerer med muggedagen!</h2>`;
  } else {
    // Legg på et år hvis muggedagen har vært
    if (now >= targetDate) { 
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    // Tell ned
    countDown(targetDate.getTime(), currentDate.getTime());

  }
}

document.addEventListener('DOMContentLoaded', function () {

  // Tell ned
  const nedtellingInterval = setInterval(function () {

    checkDate();

  }, 1000);
});
