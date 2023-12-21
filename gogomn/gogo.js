// dom-2

// document.getElementById;
// document.createElement;
// document.appendChild;
// const cards = document.getElementById("myid");
// const oneCard = document.querySelector(".card");
// oneCard.addEventListener("click", () => {
//   console.log("Clicked");
// });

// function cardClick() {
//   console.log("card clicked already bro");
// }

// oneCard.addEventListener("click", cardClick);

// local storage deer hadgalna

// localStorage.set("item", [1, 2, 3]); inspect -> application

const myRoot = document.getElementById("root");

const playButton = document.createElement("button");
playButton.setAttribute("class", "playButton");
playButton.innerText = "Begin";

myRoot.appendChild(playButton);

const myBoxDiv = document.createElement("div");
myBoxDiv.setAttribute("class", "boxes");
myRoot.appendChild(myBoxDiv);

for (let i = 0; i < 9; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style.backgroundColor = "blue";
  box.setAttribute("id", `box${i}`);
  myBoxDiv.appendChild(box);
}
const newBoxes = document.getElementsByClassName("box");

function play() {
  const red = Math.floor(Math.random() * 255);
  const red0 = Math.floor(Math.random() * 225) + 10;
  const green = Math.floor(Math.random() * 255);
  const green0 = Math.floor(Math.random() * 225) + 10;
  const blue = Math.floor(Math.random() * 255);
  const blue0 = Math.floor(Math.random() * 200) + 25;
  const randomColor = `rgb(${red},${green},${blue})`;

  for (let j = 0; j < newBoxes.length; j++) {
    newBoxes[j].style.backgroundColor = `${randomColor}`;
  }

  const myColor = `rgb(${red0},${green0},${blue0})`;

  let myPosition = Math.floor(Math.random() * 9);

  let yourBox = document.getElementById(`box${myPosition}`);
  console.log(yourBox);

  yourBox.style.backgroundColor = "white";

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((el) => {
    if (el === yourBox) {
      el.addEventListener("click", play);
    } else {
      el.removeEventListener("click", play);
    }
  });
}

playButton.addEventListener("click", play);

console.log(newBoxes);
