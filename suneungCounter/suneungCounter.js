const nextYear = document.querySelector('#nextYear');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');

const currentYear = new Date().getFullYear(); //현재 년도

const suneungDay = new Date(`${currentYear}/11/16 00:00:00:00`);

function suneungDayCounter() {
  const currentTime = new Date();
  const diff = suneungDay - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  const ms = Math.floor(diff % 1000 / 10) ;


  nextYear.innerHTML = `${currentYear + 1}`;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  milliseconds.innerHTML = ms;

  days.innerHTML = d < 10 ? '0' + d : d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
  milliseconds.innerHTML = ms < 10 ? '0' + ms : ms;
}

setInterval(suneungDayCounter, 1);
