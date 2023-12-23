//create CSS and elements

const root = document.getElementById("root");

const display = document.createElement("div");
display.setAttribute("class", "display");

root.appendChild(display);

const grid = document.createElement("div");
grid.setAttribute("class", "grid");
root.appendChild(grid);

for (let i = 0; i < 19; i++) {
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
myInputs[17].innerText = ".";
myInputs[18].innerText = "=";

//global variables

let numberA = 0;
let numberB = 0;
let operation = "";

let temp = 0; // for calculation using operations
let fraction = 0; // for fraction numbers
let fractionNum = 0;

// assigning numbers and operations to global variables
let count = 0;
for (let i = 0; i < myInputs.length; i++) {
  myInputs[i].addEventListener("click", function () {
    if (
      //numbers
      i == 16 ||
      (7 > i && i > 3) ||
      (11 > i && i > 7) ||
      (15 > i && i > 11)
    ) {
      numberA = Number(numberA + myInputs[i].innerText);

      console.log(numberA);
      console.log(typeof numberA);
      displayNumber.innerText = numberA;
      if (count > 0) {
        count = 0.5;
        temp = calculate();
      }

      //operations
    } else if (i == 3 || i == 7 || i == 11 || i == 15) {
      if (typeof numberA === "string") {
        // console.log(typeof numberA, numberA);
        numberA = Number(numberA.slice(0, -1));
      }
      console.log(numberA);
      operation = myInputs[i].innerText;
      console.log(operation);
      if (count == 0) {
        numberB = numberA;
        numberA = 0;
        count++;
      } else if (count == 0.5) {
        numberA = temp;
        displayNumber.innerText = numberA;
        numberB = numberA;
        numberA = 0;
      }
      fraction = 0;
      console.log(count);
      //= or equals
    } else if (i == 18) {
      numberA = calculate();
      displayNumber.innerText = numberA;
      // AC
    } else if (i == 0) {
      numberA = 0;
      numberB = 0;
      operation = "";
      count = 0;
      fraction = 0;
      displayNumber.innerText = numberA;
    } else if (i == 1) {
      numberA = numberA * -1;
      displayNumber.innerText = numberA;
    } else if (i == 2) {
      numberA = numberA / 100;
      displayNumber.innerText = numberA;
    } else if (i == 17 && fraction == 0) {
      fraction = 1;
      displayNumber.innerText = numberA + ".";
      numberA = numberA + ".";
    }
  });
}

// using global variables to display numbers and operation

console.log(numberA);
const displayNumber = document.createElement("p");
displayNumber.innerText = numberA;
display.appendChild(displayNumber);

//calculating inputs/variables

function calculate() {
  if (operation == "+") {
    return numberA + numberB;
  } else if (operation == "-") {
    return numberB - numberA;
  } else if (operation == "/") {
    return numberB / numberA;
  } else if (operation == "*") {
    return numberA * numberB;
  }
}

console.log(calculate());
