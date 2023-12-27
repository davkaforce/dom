const root = document.getElementById("root");

// creating 4 boards/divs and their childrens in HTML and CSS

const board = document.createElement("div");
board.setAttribute("class", "boards");
root.appendChild(board);

const paragraph = document.createElement("p");
paragraph.innerText = `My tasks`;
board.appendChild(paragraph);

const button = document.createElement("button");
button.setAttribute("id", `button`);
button.innerText = "Add task";
board.appendChild(button);

const cards = document.createElement("div");
cards.setAttribute("class", "cards");
board.appendChild(cards);

// new popup window creation(HTML/CSS) for a new task

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
root.appendChild(modal);

const modalContent = document.createElement("div");
modalContent.setAttribute("class", "modalContent");
modalContent.innerText = "modalContent";
modal.appendChild(modalContent);

const taskName = document.createElement("input");
modalContent.appendChild(taskName);

const taskDesc = document.createElement("input");
modalContent.appendChild(taskDesc);

const inButton = document.createElement("button");
inButton.setAttribute("class", "inButton");
inButton.innerText = "Enter";
modalContent.appendChild(inButton);

// open "add new task" window

button.addEventListener("click", () => {
  modal.style.display = "block";
  taskName.value = "";
  taskDesc.value = "";
});

//my main task array
let myArrayTask = [];

// new task window button

inButton.addEventListener("click", () => {
  // assigning tasks to new object and array

  cards.innerHTML = "";

  let myObjectTask = { myTask: taskName.value, myDesc: taskDesc.value };

  myArrayTask.push(myObjectTask);
  console.log(myArrayTask.length);

  myArrayTask.map((element) => {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "taskDiv");
    taskDiv.setAttribute("id", `task${myArrayTask.indexOf(element)}`);
    cards.appendChild(taskDiv);

    const existingTaskName = document.createElement("p");
    existingTaskName.innerText = "Task name: " + element.myTask;
    const existingTaskDesc = document.createElement("p");
    existingTaskDesc.innerText = "Task deskcription: " + element.myDesc;

    taskDiv.appendChild(existingTaskName);
    taskDiv.appendChild(existingTaskDesc);

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("id", `edit${myArrayTask.indexOf(element)}`);
    editButton.innerText = "edit";
    editButton.addEventListener("click", () => {
      taskName.value = `${myArrayTask[myArrayTask.indexOf(element)].myTask}`;
      taskDesc.value = `${myArrayTask[myArrayTask.indexOf(element)].myDesc}`;
      modal.style.display = "block";
    });
    taskDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `delete${myArrayTask.indexOf(element)}`);
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", () => {
      const taskDelete = document.getElementById(
        `task${myArrayTask.indexOf(element)}`
      );
      cards.removeChild(taskDelete);
      delete myArrayTask[myArrayTask.indexOf(element)];
    });
    taskDiv.appendChild(deleteButton);
  });

  modal.style.display = "none";
});

// close modal

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
