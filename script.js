document.getElementById('reveal-button').addEventListener('click', function() {
  const hiddenMessage = document.getElementById('hidden-message');
  hiddenMessage.classList.remove('d-none');
  setTimeout(() => hiddenMessage.classList.add('show'), 10); // Add show class after a short delay
  startCountdown();
});

function startCountdown() {
  const countdownElement = document.getElementById('countdown-timer');
  const newYear = new Date('January 1, 2025 00:00:00').getTime();

  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = "Happy New Year!";
    }
  }, 1000);
}