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

const bodyMain = document.querySelector(".body-template");
bodyMain.addEventListener("scroll", () => {
  const nameHeader = document.querySelector(".header-name");

  if (bodyMain.scrollTop > 0) {
    if (!nameHeader.classList.replace('header-large', 'header-small')) {
      nameHeader.classList.add('header-small');
    };
  }
  else {
    nameHeader.classList.replace('header-small', 'header-large');
  }
})