document.addEventListener('DOMContentLoaded', () => {
    let timeLeft;
    let timerId = null;
    let isRunning = false;

    const display = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const customMinutesInput = document.getElementById('customMinutes');

    // Initialize
    resetTimer();

    function updateDisplay(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        document.title = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} - Pomodoro`;
    }

    function startTimer() {
        if (isRunning) return;
        
        isRunning = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        customMinutesInput.disabled = true;

        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay(timeLeft);
            } else {
                clearInterval(timerId);
                isRunning = false;
                startBtn.disabled = false;
                pauseBtn.disabled = true;
                customMinutesInput.disabled = false;
                alert('Time is up!');
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!isRunning) return;
        
        clearInterval(timerId);
        isRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    function resetTimer() {
        pauseTimer();
        const mins = parseInt(customMinutesInput.value) || 25;
        // Validate input range
        let validMins = Math.max(1, Math.min(180, mins));
        if (validMins !== mins) {
            customMinutesInput.value = validMins;
        }
        
        timeLeft = validMins * 60;
        updateDisplay(timeLeft);
        customMinutesInput.disabled = false;
        document.title = 'Pomodoro Timer';
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    // Auto-update time when input changes (if not running)
    customMinutesInput.addEventListener('change', () => {
        if (!isRunning) {
            resetTimer();
        }
    });
});
