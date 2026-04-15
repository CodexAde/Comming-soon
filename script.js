// Set the countdown date to April 16, 2026 17:00:00 (Tomorrow at 5 PM)
const countdownDate = new Date("April 16, 2026 17:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerHTML = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(timer);
        if (daysEl) daysEl.innerHTML = "00";
        if (hoursEl) hoursEl.innerHTML = "00";
        if (minutesEl) minutesEl.innerHTML = "00";
        if (secondsEl) secondsEl.innerHTML = "00";

        const launchText = document.querySelector(".launching-text");
        if (launchText) launchText.innerHTML = "Will be back!";
    }
}, 1000);
