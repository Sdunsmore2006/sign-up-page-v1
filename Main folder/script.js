function updateClock() {
    // Get the current time in EST
    const now = new Date();
    const estTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Enables 12-hour format
    }).formatToParts(now);

    // Extract the time parts
    const hours = estTime.find(part => part.type === 'hour').value;
    const minutes = estTime.find(part => part.type === 'minute').value;
    const seconds = estTime.find(part => part.type === 'second').value;
    const ampm = estTime.find(part => part.type === 'dayPeriod').value;

    // Update the clock display
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm.toUpperCase()}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately