document.addEventListener('DOMContentLoaded', function () {
    // Sett muggedagen til 1. juni
    const targetDate = new Date('June 1, 2024 00:00:00').getTime();
  
    // Tell ned
    const nedtellingInterval = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;
  
      // Sjekk om det er den internasjonale nasjonale muggedagen
      if (timeDifference <= 0) {
        clearInterval(nedtellingInterval);
        document.getElementById('nedtelling').innerHTML = `Gratulerer med muggedagen!`;
      } else {
        // Tell dager, timer, minutter og sekunder
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        // Vis nedtelling
/*         document.getElementById('nedtelling-tekst').innerHTML = `${days} dager, ${hours} timer, ${minutes} minutter og ${seconds} sekunder igjen til muggedagen`;
 */
        document.getElementById('nedtelling').innerHTML = `
        <div class="enheter">
          <div class="enhet">
            <p class="tall">${days}</p>
            <p class="tid">dager</p>
          </div>
          <div class="enhet">
            <p class="tall">${hours}</p>
            <p class="tid">timer</p>
          </div>
          <div class="enhet">
            <p class="tall">${minutes}</p>
            <p class="tid">timer</p>
          </div>
          <div class="enhet">
            <p class="tall">${seconds}</p>
            <p class="tid">sekunder</p>
          </div>
        </div>
        <p class="undertekst">igjen til nasjonal muggedag</p>`
      }
    }, 1000);
  });
  