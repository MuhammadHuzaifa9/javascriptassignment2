// Set the countdown date to Eid ul Adha (June 17, 2024)
const countdownDate = new Date('June 17, 2024 00:00:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const seconds = Math.floor(distance / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Display the countdown in the element with id="countdown"
  document.getElementById('countdown').innerHTML = `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;

  // If the countdown is over, clear the interval
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = 'Eid ul Adha is here!';
  }
}, 1000);
