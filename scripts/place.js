// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static weather values matching HTML content
const temp = 9;  // °C (must be <= 10)
const wind = 10; // km/h (must be > 4.8)

// Rubric Requirement: Single line of code returning metric wind chill formula
const calculateWindChill = (t, w) => 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);

// Check conditions before calling function
if (temp <= 10 && wind > 4.8) {
  const chill = calculateWindChill(temp, wind);
  document.getElementById("chill").textContent = `${chill.toFixed(1)} °C`;
} else {
  document.getElementById("chill").textContent = "N/A";
}