const root = document.getElementById("root");

const input = document.createElement("input");
input.innerText = "Hello";
input.setAttribute("type", "text");

// root.appendChild(input);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "button");
button.innerText = "add new task";
const modal = document.createElement("div");
modal.setAttribute("class", "modal");
const modalContent = document.createElement("div");
modalContent.setAttribute("class", "modalContent");
modal.appendChild(modalContent);

modalContent.appendChild(input);
root.appendChild(button);
root.appendChild(modal);
const cancel = document.createElement("button");
modalContent.appendChild(cancel);
cancel.style.width = "50px";
cancel.style.height = "20px";
cancel.innerHTML = "X";
const addTask = document.createElement("button");
modalContent.appendChild(addTask);
addTask.style.width = "50px";
addTask.style.height = "20px";

function addNewTask() {
  const newTask = document.createElement("div");
  newTask.style.width = "200px";
  newTask.style.height = "100px";
  newTask.style.border = "1px black solid";
  newTask.innerText = "My Task " + input.value;
  root.appendChild(newTask);

  // creating delete and edit button

  const deleteB = document.createElement("button");
  deleteB.setAttribute("class", "deleteB");
  deleteB.innerText = "X";

  const editB = document.createElement("button");
  editB.setAttribute("class", "editB");
  editB.innerText = "edit";
  editB.addEventListener("click", function () {});

  newTask.appendChild(deleteB);
  newTask.appendChild(editB);
  deleteB.addEventListener("click", () => {});
}

button.addEventListener("click", () => {
  modal.style.display = "block";
  console.log("aa");
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});
addTask.addEventListener("click", addNewTask);

// window.addEventListener("click", () => {
//   modal.style.display = "none";
//   console.log("aaaaaa");
// });
