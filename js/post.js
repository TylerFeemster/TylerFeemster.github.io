const body = document.querySelector(".body-template");
const url = "../TFFE.html";

loadHtmlFile(url);

// Functions
async function loadHtmlFile(filepath) {
  try {
    const response = await fetch(filepath);
    if (response.ok) {
      const htmlContent = await response.text();
      body.innerHTML = htmlContent;
    } else {
      console.error("Failed to load HTML file: ", response.status);
    }
  } catch (error) {
    console.error("Error loading HTML file: ", error);
  }
}