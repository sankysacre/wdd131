// Temple Array (7 required originals + 3 additional entries)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "images/bern-switzerland.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-736359-wallpaper.jpg"
  }
];

// DOM Element References
const container = document.getElementById("temple-cards");
const heading = document.querySelector("main h2");
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

// Dynamic Temple Card Rendering Function
function displayTemples(templeList) {
  container.innerHTML = "";
  templeList.forEach((temple) => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    `;
    container.appendChild(card);
  });
}

// Initial Page Load Render
displayTemples(temples);

// Helper function for active navigation state styling
function updateActiveNav(activeElement) {
  document.querySelectorAll("nav a").forEach((link) => link.classList.remove("active"));
  activeElement.classList.add("active");
}

// Navigation Filter Event Listeners
document.getElementById("home-filter").addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = "Home";
  updateActiveNav(e.target);
  displayTemples(temples);
});

document.getElementById("old-filter").addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = "Old Temples";
  updateActiveNav(e.target);
  const oldTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.getElementById("new-filter").addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = "New Temples";
  updateActiveNav(e.target);
  const newTemples = temples.filter((t) => {
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.getElementById("large-filter").addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = "Large Temples";
  updateActiveNav(e.target);
  displayTemples(temples.filter((t) => t.area > 90000));
});

document.getElementById("small-filter").addEventListener("click", (e) => {
  e.preventDefault();
  heading.textContent = "Small Temples";
  updateActiveNav(e.target);
  displayTemples(temples.filter((t) => t.area < 10000));
});

// Mobile Hamburger Navigation Toggle
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

// Footer Metadata Setup
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;