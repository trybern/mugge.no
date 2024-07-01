function getNextTargetDate(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  let targetDate = new Date(year, month - 1, day); // month is 0-indexed in JS

  // Har det vært 1. juni, bruk neste år i stedet
  if (now > targetDate) {
    targetDate.setFullYear(year + 1);
  }

  return targetDate;
}

document.addEventListener('DOMContentLoaded', function () {
  const targetDate = getNextTargetDate(6, 1).getTime();

  console.log("Neste muggedag: ", new Date(targetDate).toDateString());

  // Tell ned
  const nedtellingInterval = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Sjekk om det er den internasjonale nasjonale muggedagen
    if (timeDifference <= 0) {
      clearInterval(nedtellingInterval);
      document.getElementById("nedtelling").innerHTML = `<h2 class="feiring">Gratulerer med muggedagen!</h2>`;
      
      // Recalculate for next year
      const nextTargetDate = getNextTargetDate(6, 1).getTime();
      setTimeout(() => location.reload(), 5000); // Reload page after 5 seconds to start new countdown
    } else {
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
  }, 1);
});
  

