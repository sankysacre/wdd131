const products = [
    { id: "fc-1888", name: "Ethiopian Yirgacheffe", averagerating: 4.5 },
    { id: "fc-2050", name: "Guatemala Antigua", averagerating: 4.7 },
    { id: "fs-1987", name: "Cold Brew Reserve Blend", averagerating: 3.5 },
    { id: "ac-2024", name: "Espresso Roast Beans", averagerating: 4.9 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.querySelector("#productName");

    if (productSelect) {
        productSelect.innerHTML += products.map(product => `
            <option value="${product.id}">${product.name}</option>
        `).join("");
    }
});