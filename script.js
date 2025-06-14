// Elements for confession timer
const Years = document.getElementById('years');
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// Elements for first-text timer
const Years2 = document.getElementById('years2');
const Days2 = document.getElementById('days2');
const Hours2 = document.getElementById('hours2');
const Minutes2 = document.getElementById('minutes2');
const Seconds2 = document.getElementById('seconds2');

// Start dates
const startDate = new Date("June 10, 2025 21:55:00").getTime();
const startDate2 = new Date("Sept 4, 2018 21:55:00").getTime();

// Timer for Confession
function timer1() {
  const now = new Date().getTime();
  const elapsed = now - startDate;

  const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 365;
  const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
  const seconds = Math.floor(elapsed / 1000) % 60;

  Years.innerHTML = years.toString().padStart(2, '0');
  Days.innerHTML = days.toString().padStart(2, '0');
  Hours.innerHTML = hours.toString().padStart(2, '0');
  Minutes.innerHTML = minutes.toString().padStart(2, '0');
  Seconds.innerHTML = seconds.toString().padStart(2, '0');
}

// Timer for First Text
function timer2() {
  const now = new Date().getTime();
  const elapsed = now - startDate2;

  const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 365;
  const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
  const seconds = Math.floor(elapsed / 1000) % 60;

  Years2.innerHTML = years.toString().padStart(2, '0');
  Days2.innerHTML = days.toString().padStart(2, '0');
  Hours2.innerHTML = hours.toString().padStart(2, '0');
  Minutes2.innerHTML = minutes.toString().padStart(2, '0');
  Seconds2.innerHTML = seconds.toString().padStart(2, '0');
}

// Run both timers every second
setInterval(timer1, 1000);
setInterval(timer2, 1000);




// confession page

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseText = document.getElementById("responseText");

let noClickCount = 0;
let yesClickCount = 0;

yesBtn.addEventListener("click", () => {
  
  yesClickCount++;
  if (yesClickCount <= 1) 
    responseText.innerHTML = `<span style="color: orange;">Awww 🥺 <br> But I coded a little for no too, so click on that too lol</span>`;
  else 
    responseText.innerHTML = "Hehe, 'forever' 💖";
});

noBtn.addEventListener("click", () => {
  noClickCount++;
  if (noClickCount <= 3) {
  responseText.innerHTML = `<span style="color: orange;">Excuse me?😤 <br> Try again</span>`;
} else if (noClickCount == 9) {
  responseText.innerHTML = `<span style="color: green;">Well, try just one last time</span>`;
} else {
  responseText.innerHTML = `<span style="color: red;">Really? 'No' so many times??? 🥹<br>TRY AGAIN PROPERLY!!!</span>`;
}


  let shrinkFactor = 1 - noClickCount * 0.1;
  let growFactor = 1 + noClickCount * 0.1;

  if (shrinkFactor <= 0.1) {
    noBtn.style.display = "none";
  } else {
    noBtn.style.transform = `scale(${shrinkFactor})`;
  }

  yesBtn.style.transform = `scale(${growFactor})`;
});

