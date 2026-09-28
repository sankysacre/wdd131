document.addEventListener("DOMContentLoaded", () => {
    // Retrieve and increment review counter in localStorage
    const counterDisplay = document.getElementById("reviewCounter");
    let reviewCount = parseInt(localStorage.getItem("completedReviews") || "0", 10);
    
    reviewCount += 1;
    localStorage.setItem("completedReviews", reviewCount);

    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }

    // Dynamic Footer Stamping
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }
});