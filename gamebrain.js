function createRandom() {
  randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  document.getElementById("randomNum").innerText = randomNum;
}

let randomNum = Math.floor(Math.random() * 100);
document.getElementById("randomNum").innerText = randomNum;

function check() {
  let inputNumber = Number(document.getElementById("mynum").value);
  if (randomNum > inputNumber) {
    document.getElementById("message").innerText = "It's higher than that";
  } else if (randomNum < inputNumber) {
    document.getElementById("message").innerText = "It's lower than that";
  } else if (randomNum == inputNumber) {
    document.getElementById("message").innerText = "YES";
  }
}
document.getElementById(
  "jsbox"
).innerHTML = `<div class="yellowbox"><div id="add"></div></div>`;

document.getElementById("add").innerHTML = `<div class="minibox"></div>`;

function addNew() {
  document.getElementById("add").innerHTML += `<div class="minibox"></div>`;
}
