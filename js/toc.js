const body = document.querySelector(".body-template");
const postContent = document.getElementById("post-content");

// Functions
async function loadHtmlFile(filename) {
  // remove title
  const title = document.getElementById("writing-title");
  title.remove();
  //remove contents
  const contents = document.getElementById("toc");
  contents.remove();
  // load html file
  const filepath = "../posts/" + filename + ".html";
  try {
    const response = await fetch(filepath);
    if (response.ok) {
      const htmlContent = await response.text();
      const newDiv = document.createElement("div");
      newDiv.className = "body-text";
      newDiv.innerHTML = htmlContent;
      postContent.innerHTML = "";
      postContent.appendChild(newDiv);
      renderMathInElement(postContent, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
      });
    } else {
      console.error("Failed to load HTML file: ", response.status);
    }
  } catch (error) {
    console.error("Error loading HTML file: ", error);
  }
}

async function fetchPosts() {
  try {
    const response = await fetch("../contents.json");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function generateTOC() {
  const toc = document.getElementById("toc");
  console.log(toc);
  await fetchPosts().then((posts) => {
    console.log(posts);
    posts.forEach((post) => {
      const item = document.createElement("h2");
      item.className = "toc-item";
      const link = document.createElement("a");
      link.text = post.title;
      link.onclick = async () => loadHtmlFile(post.file);
      item.appendChild(link);
      toc.appendChild(item);
    });
  });
}

generateTOC();
