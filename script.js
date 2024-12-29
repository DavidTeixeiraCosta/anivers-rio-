const targetDate = new Date("January 18, 2025 00:00:00").getTime();

function updateCurrentTime() {
    const now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleString('pt-BR');
}


function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown-timer").textContent = "É hojeee!";
        clearInterval(countdownInterval);
        return;
    }

   
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCurrentTime, 1000);


const countdownInterval = setInterval(updateCountdown, 1000);


updateCurrentTime();
updateCountdown();
