let stopwatchDisplay = document.getElementById('stopwatch');
let startStopButton = document.getElementById('start-stop');
let resetButton = document.getElementById('reset');

let stopwatch;
let milliseconds = 0;

function formatTime(ms) {
    let hrs = Math.floor(ms / 3600000);
    let mins = Math.floor((ms % 3600000) / 60000);
    let secs = Math.floor((ms % 60000) / 1000);
    let msecs = ms % 100;
    return [hrs, mins, secs].map(unit => String(unit).padStart(2, '0')).join(':') + ':' + String(msecs).padStart(2, '0');
}

function updateStopwatch() {
    stopwatchDisplay.textContent = formatTime(milliseconds);
}

function startStopwatch() {
    if (!stopwatch) {
        stopwatch = setInterval(() => {
            milliseconds += 10;
            updateStopwatch();
        }, 10);
        startStopButton.textContent = 'Stop';
        startStopButton.classList.remove('start');
        startStopButton.classList.add('stop');
    } else {
        clearInterval(stopwatch);
        stopwatch = null;
        startStopButton.textContent = 'Start';
        startStopButton.classList.remove('stop');
        startStopButton.classList.add('start');
    }
}

function resetStopwatch() {
    if (stopwatch) {
        clearInterval(stopwatch);
        stopwatch = null;
        startStopButton.textContent = 'Start';
        startStopButton.classList.remove('stop');
        startStopButton.classList.add('start');
    }
    milliseconds = 0;
    updateStopwatch();
}

startStopButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);

updateStopwatch();
