// Set footer dynamic dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static temperature and wind speed values
const temp = 9; // °C (<= 10 °C)
const speed = 10; // km/h (> 4.8 km/h)

// One-line calculateWindChill function for Metric units (°C and km/h)
const calculateWindChill = (t, s) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16));

const chillElement = document.getElementById("chill");

// Perform calculation only if conditions are met
if (temp <= 10 && speed > 4.8) {
  chillElement.textContent = `${calculateWindChill(temp, speed).toFixed(1)} °C`;
} else {
  chillElement.textContent = "N/A";
}