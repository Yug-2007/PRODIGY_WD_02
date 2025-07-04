let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = '';
}

function lap() {
  let li = document.createElement("li");
  li.innerText = display.innerText;
  laps.appendChild(li);
}
