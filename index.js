function updateTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const month = now.getMonth();
	const day = now.getDate();
	const year = now.getFullYear();
	const period = hours >= 12 ? '"PM"' : '"AM"';
	const hours12 = hours % 12 === 0 ? 12 : hours % 12;

	// Display the time parts in the corresponding span elements
	document.getElementById('hour').textContent = hours12.toString().padStart(2, '0');
	document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
	document.getElementById('second').textContent = seconds.toString().padStart(2, '0');
	document.getElementById('year').textContent = year.toString().padStart(2, '0');
	document.getElementById('day').textContent = day.toString().padStart(2, '0');
	document.getElementById('period').textContent = period;

	// Convert month number to month name
	const monthNames = [
		"\"January\"", "\"February\"", "\"March\"",
		"\"April\"", "\"May\"", "\"June\"",
		"\"July\"", "\"August\"", "\"September\"",
		"\"October\"", "\"November\"", "\"December\""
	];
	document.getElementById('month').textContent = monthNames[month];

}

// Update the time every second
setInterval(updateTime, 1000);