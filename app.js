// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-container");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("div");
  newTodo.innerText = "Heyo, this is a task.";
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<h3>Check</h3>";
  completedButton.classList.add("complete-button");
  buttonDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<h3>Trash</h3>";
  trashButton.classList.add("complete-button");
  buttonDiv.appendChild(trashButton);

  todoDiv.append(buttonDiv);
  todoList.appendChild(todoDiv);
}