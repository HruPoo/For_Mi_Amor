const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// Use the start date and time
const startDate = new Date("June 10, 2025 21:55:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const elapsed = currentDate - startDate;

    const days = Math.floor(elapsed / 1000 / 60 / 60 / 24);
    const hours = Math.floor(elapsed / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(elapsed / 1000 / 60) % 60;
    const seconds = Math.floor(elapsed / 1000) % 60;

    Days.innerHTML = days.toString().padStart(2, '0');
    Hours.innerHTML = hours.toString().padStart(2, '0');
    Minutes.innerHTML = minutes.toString().padStart(2, '0');
    Seconds.innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(timer, 1000);
