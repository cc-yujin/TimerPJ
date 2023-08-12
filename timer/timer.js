// 시간 셋팅
const selectTime = document.querySelector('.selectTime');

// 분 : 초 : 밀리초
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');

// 컨트롤러
const handleTimer = document.querySelector('.controller'); //adEventListener로 고쳐보기 고안중

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let time = 0;
let countdownInterval = null;

window.onload = function () {
  const savedTime = localStorage.getItem('savedTime');
  if (savedTime) {
    time = parseInt(savedTime);
    updateCountdown(); // 불러온 시간으로 카운트다운 업데이트
  }
};

function stopTimer() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function setTimer(e) {
  stopTimer();

  if (e.target.classList.contains('fiveMinutes')) {
    minutes.innerHTML = '05';
  } else if (e.target.classList.contains('tenMinutes')) {
    minutes.innerHTML = '10';
  } else {
    minutes.innerHTML = '30';
  }
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

selectTime.addEventListener('click', setTimer);
start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

//컨트롤러

function startTimer() {
  if (countdownInterval !== null) return;
  if (
    minutes.textContent === '00' &&
    seconds.textContent === '00' &&
    milliseconds.textContent === '00'
  ) {
    return;
  }
  countdownInterval = setInterval(updateCountdown, 10);
}

function pauseTimer() {
  stopTimer();

}

function resetTimer() {
  stopTimer();

  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  milliseconds.innerHTML = '00';
}
