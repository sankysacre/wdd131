document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount-ls", reviewCount);

    const countDisplay = document.querySelector("#reviewCount");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
});