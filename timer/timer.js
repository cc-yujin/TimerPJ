// 시간 셋팅
const setFiveMinutes = document.querySelector('.fiveMinutes');
const setTenMinutes = document.querySelector('.tenMinutes');
const setThirtyMinutes = document.querySelector('.thirtyMinutes');

// 분 : 초 : 밀리초
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');

// 컨트롤러
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let time = 0;
let countdownInterval;

window.onload = function () {
  const savedTime = localStorage.getItem('savedTime');
  if (savedTime) {
    time = parseInt(savedTime);
    updateCountdown(); // 불러온 시간으로 카운트다운 업데이트
  }
};

function setTimer(min) {
  clearInterval(countdownInterval); 

  if(min === 5){
    minutes.innerHTML = '05';
  }
  minutes.innerHTML = min;
  seconds.innerHTML = '00';
  milliseconds.innerHTML = '00';

  time = minutes.innerHTML * 60 * 1000; //밀리초
  localStorage.setItem('savedTime', time); 
}

function updateCountdown() {
  
  const m = Math.floor(time / 1000 / 60) % 60;
  const s = Math.floor(time / 100) % 60;
  const ms = Math.floor(time % 100);

  minutes.innerHTML = m;
  seconds.innerHTML = s;
  milliseconds.innerHTML = ms;

  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
  milliseconds.innerHTML = ms < 10 ? '0' + ms : ms;

  time--;
}


//컨트롤러
function startTimer() {
  if (minutes.innerHTML !== '00') {
    countdownInterval = setInterval(updateCountdown, 10);
  }
}

function pauseTimer() {
  clearInterval(countdownInterval);
}

function resetTimer() {
  clearInterval(countdownInterval);
  
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  milliseconds.innerHTML ='00';
}

