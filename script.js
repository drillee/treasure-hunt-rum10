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
    if (treasure.dataset.found) {
        treasure.dataset.found = "true";
        treasure.classList.add("found");
        foundCount++;
        foundCountEl.textContent = foundCount;
        alert("Grattis! Du hittade en skatt!");

        if (foundCount === 10) {
        clearInterval(timer);
        alert("Alla skatter hittade på " + time + " sekunder!");
      }
    } else {
      alert("Den här skatten har du redan hittat!");
    }
  });
});




// Exempel: skatt 1
const treasure1 = document.getElementById("treasure1");
treasure1.addEventListener("click", () => {
  treasure1.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});


// ... fortsätt för alla skatter ...

const treasure2 = document.getElementById("treasure2");
treasure2.addEventListener("click", () => {
  treasure2.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure3 = document.getElementById("treasure3");
treasure3.addEventListener("click", () => {
  treasure3.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});


const treasure4 = document.getElementById("treasure4");
treasure4.addEventListener("click", () => {
  treasure4.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});


const treasure5 = document.getElementById("treasure5");
treasure5.addEventListener("click", () => {
  treasure5.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure6 = document.getElementById("treasure6");
treasure6.addEventListener("click", () => {
  treasure6.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure7 = document.getElementById("treasure7");
treasure7.addEventListener("click", () => {
  treasure7.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

const treasure8 = document.getElementById("treasure8");
treasure8.addEventListener("click", () => {
  treasure8.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});


const treasure9 = document.getElementById("treasure9");
treasure9.addEventListener("click", () => {
  treasure9.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});


const treasure10 = document.getElementById("treasure10");
treasure10.addEventListener("click", () => {
  treasure10.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");

  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
});

