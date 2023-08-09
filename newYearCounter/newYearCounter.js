const nextYear = document.querySelector('#nextYear');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear(); //현재 년도

const newYearTime = new Date(`${currentYear + 1}/01/01 00:00:00`);

function updateCountdowntime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
  const m = Math.floor(diff / 1000 / 60 ) % 60;
  const s = Math.floor(diff / 1000 ) % 60;

  nextYear.innerHTML = `${currentYear + 1}`;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  days.innerHTML = d < 10 ? '0' + d : d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdowntime, 1000);