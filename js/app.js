// Build Header
const header = document.querySelector(".header-template");
const headerPath = "./templates/header.html";
extractTemplate(header, headerPath);

// Functions
async function extractTemplate(element, filepath) {
  const response = await fetch(filepath);
  const blob = await response.blob();
  
  const reader = new FileReader();
  reader.onload = (event) => {
    var data = event.target.result;
    element.innerHTML = data;
  }
  reader.readAsText(blob);
};