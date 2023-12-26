// 19.Dec

let myname = "John";
let age = 19;

let intro = `my name is ${myname}`;

// daily task

const products = [
  {
    name: "Laptop",
    price: 999.99,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "Powerful laptop with high-performance specs for work and entertainment.",
  },
  {
    name: "Smartphone",
    price: 499.5,
    brand: "TechCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Cutting-edge smartphone with advanced features and a sleek design.",
  },
  {
    name: "Headphones",
    price: 99.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Comfortable headphones with excellent sound quality for immersive listening experiences.",
  },
  {
    name: "Camera",
    price: 799.0,
    brand: "PhotoTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Professional-grade camera capturing high-resolution photos and videos.",
  },
  {
    name: "Tablet",
    price: 299.99,
    brand: "TabCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Portable tablet perfect for entertainment and productivity on-the-go.",
  },
  {
    name: "Smartwatch",
    price: 199.5,
    brand: "WearableTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Smartwatch with health-tracking features and a stylish design.",
  },
  {
    name: "Desktop Computer",
    price: 1299.0,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-performance desktop computer for demanding tasks and gaming.",
  },
  {
    name: "Printer",
    price: 149.0,
    brand: "PrintTech",
    image_url: "https://via.placeholder.com/300",
    description: "Versatile printer suitable for both home and office use.",
  },
  {
    name: "Keyboard",
    price: 49.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Ergonomic keyboard designed for comfortable and efficient typing.",
  },
  {
    name: "Mouse",
    price: 29.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Responsive and precise mouse for seamless navigation and control.",
  },
  {
    name: "Speaker System",
    price: 399.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description: "Immersive speaker system delivering rich and clear audio.",
  },
  {
    name: "External Hard Drive",
    price: 129.0,
    brand: "StorageTech",
    image_url: "https://via.placeholder.com/300",
    description: "High-capacity external hard drive for secure data storage.",
  },
  {
    name: "Gaming Console",
    price: 399.0,
    brand: "GameTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Next-gen gaming console offering stunning graphics and gaming experiences.",
  },
  {
    name: "Router",
    price: 79.99,
    brand: "ConnectTech",
    image_url: "https://via.placeholder.com/300",
    description: "Reliable router providing high-speed internet connectivity.",
  },
  {
    name: "Monitor",
    price: 349.5,
    brand: "DisplayTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-resolution monitor delivering vibrant and clear visuals.",
  },
  {
    name: "Scanner",
    price: 89.0,
    brand: "ScanTech",
    image_url: "https://via.placeholder.com/300",
    description: "Efficient scanner for digitizing documents and images.",
  },
  {
    name: "Fitness Tracker",
    price: 79.0,
    brand: "FitTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Fitness tracker monitoring activity levels and health metrics.",
  },
  {
    name: "Wireless Earbuds",
    price: 129.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Wireless earbuds with premium audio quality and long battery life.",
  },
  {
    name: "Security Camera",
    price: 199.99,
    brand: "SecureTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-definition security camera for home or business surveillance.",
  },
  {
    name: "Electric Toothbrush",
    price: 59.5,
    brand: "DentalTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Advanced electric toothbrush for thorough and effective dental care.",
  },
];

let root = document.getElementById("root");

function createCard(prod) {
  let cardDiv = document.createElement("div");

  let para1 = document.createElement("p");
  para1.innerText = prod.name;

  let para2 = document.createElement("p");
  para2.innerText = prod.price;

  let img = document.createElement("img");
  img.setAttribute(`src`, prod.image_url);

  cardDiv.appendChild(para1);
  cardDiv.appendChild(para2);
  cardDiv.appendChild(img);
  return cardDiv;
}

// products.map((a) => {
//   root.appendChild(createCard(a));
// });

let cardDiv = document.createElement("div");

let para1 = document.createElement("p");
para1.innerText = products[0].name;

let para2 = document.createElement("p");
para2.innerText = products[0].price;

let img = document.createElement("img");
img.setAttribute(`src`, products[0].image_url);

cardDiv.appendChild(para1);
cardDiv.appendChild(para2);
cardDiv.appendChild(img);

root.appendChild(cardDiv);

// ES6 : object propoerty can

const doSomething = () => {};

const object = {
  id: "John",
  funct: doSomething,
};

// destructuring

function doSomething2(person) {
  const { age, name } = person;
  console.log(age, name, "haha");
}

const me = {
  age: 18,
  name: "Ana",
};

doSomething2(me);

// ternary operator

const result = 10 > 5 ? "false" : "true";

console.log(result);

// spread operator

function doAnything(...things) {
  console.log("do me");
  console.log(things);
  const newArray = ["abc", "efd", ...things];
  console.log(newArray);
}

doAnything(10, 20, "hello", "world");

let myfirstArr = [1, 2, 3];
let mysecondArr = [0.1, 10, ...myfirstArr];
console.log(mysecondArr);

// array to html

// const products = [
//   {
//     name: "Laptop",
//     price: 999.99,
//     brand: "ExampleBrand",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Powerful laptop with high-performance specs for work and entertainment.",
//   },
//   {
//     name: "Smartphone",
//     price: 499.5,
//     brand: "TechCo",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Cutting-edge smartphone with advanced features and a sleek design.",
//   },
//   {
//     name: "Headphones",
//     price: 99.0,
//     brand: "AudioTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Comfortable headphones with excellent sound quality for immersive listening experiences.",
//   },
//   {
//     name: "Camera",
//     price: 799.0,
//     brand: "PhotoTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Professional-grade camera capturing high-resolution photos and videos.",
//   },
//   {
//     name: "Tablet",
//     price: 299.99,
//     brand: "TabCo",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Portable tablet perfect for entertainment and productivity on-the-go.",
//   },
//   {
//     name: "Smartwatch",
//     price: 199.5,
//     brand: "WearableTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Smartwatch with health-tracking features and a stylish design.",
//   },
//   {
//     name: "Desktop Computer",
//     price: 1299.0,
//     brand: "ExampleBrand",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "High-performance desktop computer for demanding tasks and gaming.",
//   },
//   {
//     name: "Printer",
//     price: 149.0,
//     brand: "PrintTech",
//     image_url: "https://via.placeholder.com/300",
//     description: "Versatile printer suitable for both home and office use.",
//   },
//   {
//     name: "Keyboard",
//     price: 49.99,
//     brand: "InputTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Ergonomic keyboard designed for comfortable and efficient typing.",
//   },
//   {
//     name: "Mouse",
//     price: 29.99,
//     brand: "InputTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Responsive and precise mouse for seamless navigation and control.",
//   },
//   {
//     name: "Speaker System",
//     price: 399.0,
//     brand: "AudioTech",
//     image_url: "https://via.placeholder.com/300",
//     description: "Immersive speaker system delivering rich and clear audio.",
//   },
//   {
//     name: "External Hard Drive",
//     price: 129.0,
//     brand: "StorageTech",
//     image_url: "https://via.placeholder.com/300",
//     description: "High-capacity external hard drive for secure data storage.",
//   },
//   {
//     name: "Gaming Console",
//     price: 399.0,
//     brand: "GameTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Next-gen gaming console offering stunning graphics and gaming experiences.",
//   },
//   {
//     name: "Router",
//     price: 79.99,
//     brand: "ConnectTech",
//     image_url: "https://via.placeholder.com/300",
//     description: "Reliable router providing high-speed internet connectivity.",
//   },
//   {
//     name: "Monitor",
//     price: 349.5,
//     brand: "DisplayTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "High-resolution monitor delivering vibrant and clear visuals.",
//   },
//   {
//     name: "Scanner",
//     price: 89.0,
//     brand: "ScanTech",
//     image_url: "https://via.placeholder.com/300",
//     description: "Efficient scanner for digitizing documents and images.",
//   },
//   {
//     name: "Fitness Tracker",
//     price: 79.0,
//     brand: "FitTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Fitness tracker monitoring activity levels and health metrics.",
//   },
//   {
//     name: "Wireless Earbuds",
//     price: 129.0,
//     brand: "AudioTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Wireless earbuds with premium audio quality and long battery life.",
//   },
//   {
//     name: "Security Camera",
//     price: 199.99,
//     brand: "SecureTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "High-definition security camera for home or business surveillance.",
//   },
//   {
//     name: "Electric Toothbrush",
//     price: 59.5,
//     brand: "DentalTech",
//     image_url: "https://via.placeholder.com/300",
//     description:
//       "Advanced electric toothbrush for thorough and effective dental care.",
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   const div = document.createElement("p");
//   div.innerText = products[i].name;
//   root.appendChild(div);
//   console.log(i);
// }

// products.map((element) => {
//   const para1 = document.createElement("p");
//   para1.innerText = "name: " + element.name;
//   root.appendChild(para1);
//   const para2 = document.createElement("p");
//   para2.innerText = "price: " + element.price;
//   root.appendChild(para2);
// });

// BOM - Browser object Model

// window.open  - create new tab like chrome tab/window
