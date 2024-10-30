const body = document.querySelector(".body-template");
const url = "../posts/ArgumentOutline.html";

loadHtmlFile(url);

// Functions
async function loadHtmlFile(filepath) {
  try {
    const response = await fetch(filepath);
    if (response.ok) {
      const htmlContent = await response.text();
      const newDiv = document.createElement('div');
      newDiv.className = 'body-text';
      newDiv.innerHTML = htmlContent;
      body.appendChild(newDiv);
    } else {
      console.error("Failed to load HTML file: ", response.status);
    }
  } catch (error) {
    console.error("Error loading HTML file: ", error);
  }
}