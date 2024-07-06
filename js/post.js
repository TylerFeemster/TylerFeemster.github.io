
const body = document.querySelector(".body-template");
const url = "./ph/post1.yaml";

dataFromFile(url).then((data) => {
    dataFromURL = data;
    console.log(data);
    createHTML(data.title, data.description, data.text);
});

// Functions
// get yaml data
async function dataFromFile(filepath) {
  const response = await fetch(filepath);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = jsyaml.load(event.target.result);
        console.log(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsText(blob);
  });
}

// yaml data -> html
function createHTML(title, description, text) {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h1.innerText = title;
    h2.innerText = description;
    p.innerText = text;

    for (let child of [h1, h2, p]) {
        child.classList.add("body-text");
        body.appendChild(child);
    }
}