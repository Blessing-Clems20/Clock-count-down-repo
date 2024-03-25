function countdown(minutes) {
    let seconds = minutes * 60;

    function tick() {
        // This script expects an element with an ID of 'timer'
        let timerElement = document.getElementById("timer");

        // Time calculation
        let currentMinutes = Math.floor(seconds / 60);
        let currentSeconds = seconds % 60;

        // Add leading zero to seconds if it is less than 10
        currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

        // Output the result in an element with id="timer"
        timerElement.innerHTML = currentMinutes + ":" + currentSeconds;

        // Decrease total seconds
        seconds--;

        // Check if we're at zero, if not, set a timeout for the next tick
        if (seconds >= 0) {
            setTimeout(tick, 1000); // Update every second
        } else {
            timerElement.innerHTML = "00:00";
        }
    }

    // Start the countdown
    tick();
}


countdown(10); // Countdown from 5 minutes
