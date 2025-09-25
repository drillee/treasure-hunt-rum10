// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// --- Här ska ni lägga in era egna skatter --- //


const treasures = document.querySelectorAll(".treasure");

treasures.forEach(treasure => {
  treasure.addEventListener("click", () => {
    if (treasure.dataset.found !== "true") {
        treasure.dataset.found = "true";
        treasure.classList.add("found");
        foundCount++;
        foundCountEl.textContent = foundCount;
        alert("Grattis! Du hittade en skatt!");

        if (foundCount === treasures.length) {
         clearInterval(timer);
        alert("Alla skatter hittade på " + time + " sekunder!");
      }
    } else {
      alert("Den här skatten har du redan hittat!");
    }
  });
});






