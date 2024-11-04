function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const month = now.getMonth();
  const day = now.getDate();
  const dayOfWeek = now.getDay();
  const year = now.getFullYear();
  const period = hours >= 12 ? '"PM"' : '"AM"';
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  // Convert month number to month name
  const monthNames = [
    "\"January\"", "\"February\"", "\"March\"",
    "\"April\"", "\"May\"", "\"June\"",
    "\"July\"", "\"August\"", "\"September\"",
    "\"October\"", "\"November\"", "\"December\""
  ];

  const dayOfWeeks = ["\"Sunday\"", "\"Monday\"", "\"Tuesday\"", "\"Wednesday\"", "\"Thursday\"", "\"Friday\"",
    "\"Saturday\""];

  // Display the time parts in the corresponding span elements
  document.getElementById('year').textContent = year.toString().padStart(2, '0');
  document.getElementById('month').textContent = monthNames[month];
  document.getElementById('day').textContent = day.toString().padStart(2, '0');
  document.getElementById('dayOfWeek').textContent = dayOfWeeks[dayOfWeek];
  document.getElementById('period').textContent = period;
  document.getElementById('hour').textContent = hours12.toString().padStart(2, '0');
  document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('second').textContent = seconds.toString().padStart(2, '0');

}

// Update the time every second
setInterval(updateTime, 1000);
