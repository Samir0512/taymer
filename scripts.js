let stopwatchDisplay = document.getElementById('stopwatch');
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let resetButton = document.getElementById('reset');

    let stopwatch;
    let milliseconds = 0;






    
    function formatTime(ms) {
        let hrs = Math.floor(ms / 3600000);
        let mins = Math.floor((ms % 3600000) / 60000);
        let secs = Math.floor((ms % 60000) / 1000);
        let msecs = ms % 1000;
        return [hrs, mins, secs].map(unit => String(unit).padStart(2, '0')).join(':') + ':' + String(msecs).padStart(3, '0');
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
        }
    }

    function stopStopwatch() {
        if (stopwatch) {
            clearInterval(stopwatch);
            stopwatch = null;
        }
    }

    function resetStopwatch() {
        stopStopwatch();
        milliseconds = 0;
        updateStopwatch();
    }

    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);

    updateStopwatch();