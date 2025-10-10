const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");

const startButton = document.getElementById("startButton");

let countdownInterval;

function startTimer() {
    let hours = parseInt(inputHours.value) || 0;
    let minutes = parseInt(inputMinutes.value) || 0;
    let seconds = parseInt(inputSeconds.value) || 0;

    let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    inputHours.value = '';
    inputMinutes.value = '';
    inputSeconds.value = '';

    countdownInterval = setInterval(() => {
        const days = Math.floor(totalTimeInSeconds / 86400);
        const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60)
        const seconds = Math.floor((totalTimeInSeconds % 60));

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        totalTimeInSeconds--;

        if (totalTimeInSeconds < 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
}
startButton.addEventListener('click', () => {

    clearInterval(countdownInterval);

    startTimer();
});