// Add Header Info
const headerList = document.querySelector(".header-links");

const info = {
  "Philosophy": "./ph.html",
  "Mathematics": "./ma.html",
  "Software": "./",
  "About": "./index.html",
};

for (let key in info) {
  const link = document.createElement("a");
  link.setAttribute("href", info[key]);
  link.classList.add("link-button");

  const h3 = document.createElement("h3");
  h3.innerText = key;
  link.appendChild(h3);

  headerList.appendChild(link);
}

// Event Listeners

// Function
