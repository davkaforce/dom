//create CSS and elements

const root = document.getElementById("root");

const display = document.createElement("div");
display.setAttribute("class", "display");
root.appendChild(display);

const grid = document.createElement("div");
grid.setAttribute("class", "grid");
root.appendChild(grid);

for (let i = 0; i < 20; i++) {
  const input = document.createElement("button");
  input.setAttribute("class", "input");
  input.setAttribute("id", `input${i}`);
  grid.appendChild(input);
}

// assigning value to inputs

const myInputs = document.querySelectorAll(".input");
myInputs[0].innerText = "AC";
myInputs[1].innerText = "+/-";
myInputs[2].innerText = "%";
myInputs[3].innerText = "/";
myInputs[4].innerText = "7";
myInputs[5].innerText = "8";
myInputs[6].innerText = "9";
myInputs[7].innerText = "*";
myInputs[8].innerText = "4";
myInputs[9].innerText = "5";
myInputs[10].innerText = "6";
myInputs[11].innerText = "-";
myInputs[12].innerText = "1";
myInputs[13].innerText = "2";
myInputs[14].innerText = "3";
myInputs[15].innerText = "+";
myInputs[16].innerText = "0";
myInputs[17].innerText = "0";
myInputs[18].innerText = ".";
myInputs[19].innerText = "=";

//global variables

let numberA = 2;
let numberB = 10;
let operation = "/";

// send elements using event listener :
// receive as global variables

//numbers
myInputs[0].addEventListener("click", function () {
  operation = myInputs[0].innerText;
  console.log(operation);
});

// using global variables to display numbers and operation

// operation boxes + addevent listener
// number boxes + addevent listener

//calculating inputs/variables

function calculate() {
  if (operation == "+") {
    return numberA + numberB;
  } else if (operation == "-") {
    return numberA - numberB;
  } else if (operation == "/") {
    return numberA / numberB;
  } else if (operation == "*") {
    return numberA * numberB;
  }
}

console.log(calculate());
