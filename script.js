document.addEventListener('DOMContentLoaded', function () {
    // Sett muggedagen til 1. juni
    const targetDate = new Date('June 1, 2025 00:00:00').getTime();
    /* const targetDate = new Date('February 29, 2024 00:00:00').getTime(); */

    console.log("Jeg er i gang")
  
    // Tell ned
    const nedtellingInterval = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
  
      // Sjekk om det er den internasjonale nasjonale muggedagen
      if (timeDifference <= 0) {
        clearInterval(nedtellingInterval);
        document.getElementById("nedtelling").innerHTML = `<h2 class="feiring">Gratulerer med muggedagen!</h2>`;
      } else {
        // Tell dager, timer, minutter og sekunder
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Angi tid
        document.getElementById("days").innerText = days
        document.getElementById("hours").innerText = hours
        document.getElementById("minutes").innerText = minutes
        document.getElementById("seconds").innerText = seconds
      }
    }, 0);
  });
  

