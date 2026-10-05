document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.querySelector("#temp");
    const windElement = document.querySelector("#wind");
    const chillElement = document.querySelector("#chill");

    if (tempElement && windElement && chillElement) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        if (temp <= 10 && wind > 4.8) {
            const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
            chillElement.textContent = `${windChill.toFixed(1)}°C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});