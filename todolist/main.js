const root = document.getElementById("root");

// ----here real project starts----

// creating actual 4 boards

let currentBoardButton = 0;

for (let i = 0; i < 4; i++) {
  const board = document.createElement("div");
  board.setAttribute("class", "boards");
  board.setAttribute("id", `board${i + 1}`);
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
  cards.setAttribute("id", `cards${i + 1}`);
  board.appendChild(cards);

  button.addEventListener("click", () => {
    modal.style.display = "block";
    taskName.value = "";
    taskDesc.value = "";
    currentBoardButton = `${i + 1}`;
  });
}

// global arrays and global html cards for each board

let myArrayTask1 = [];
let myArrayTask2 = [];
let myArrayTask3 = [];
let myArrayTask4 = [];

let cards1 = document.getElementById("cards1");
let cards2 = document.getElementById("cards2");
let cards3 = document.getElementById("cards3");
let cards4 = document.getElementById("cards4");

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

// new task window button

function render(array, cards) {
  cards.innerHTML = "";

  let myObjectTask = { myTask: taskName.value, myDesc: taskDesc.value };

  array.push(myObjectTask);

  array.map((element, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "taskDiv");
    taskDiv.setAttribute("id", `task${array.indexOf(element)}`);

    cards.appendChild(taskDiv);

    const existingTaskName = document.createElement("p");
    existingTaskName.innerText = "Task name: " + element.myTask;
    const existingTaskDesc = document.createElement("p");
    existingTaskDesc.innerText = "Task deskcription: " + element.myDesc;

    taskDiv.appendChild(existingTaskName);
    taskDiv.appendChild(existingTaskDesc);

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("id", `edit${array.indexOf(element)}`);
    editButton.innerText = "edit";
    editButton.addEventListener("click", () => {
      taskName.value = element.myTask;
      taskDesc.value = element.myDesc;
      modal.disp;
    });
    taskDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `delete${array.indexOf(element)}`);
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", () => {});
    taskDiv.appendChild(deleteButton);
  });

  modal.style.display = "none";
}

inButton.addEventListener("click", () => {
  if (currentBoardButton == 1) {
    render(myArrayTask1, cards1);
  }
  if (currentBoardButton == 2) {
    render(myArrayTask2, cards2);
  }
  if (currentBoardButton == 3) {
    render(myArrayTask3, cards3);
  }
  if (currentBoardButton == 4) {
    render(myArrayTask4, cards4);
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
