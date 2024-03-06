// Single Line Comment

/**
 * Multiple
 * Lines
 * Comment
 */

// Statements

// Conditional Statements

const firstName = "Jay";

// If / else if / else
if (firstName === "Jay") {
  console.log("Hello Jay");
} else if (firstName === "John") {
  console.log("Hello John");
} else {
  console.log("Hello Stranger");
}

// Switch
switch (firstName) {
  case "Jay":
    console.log("Hello Jay");
    break;
  case "John":
    console.log("Hello John");
    break;
  default:
    console.log("Hello Stranger");
}

// Loops

// for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// Functions
// function expression
function sayHello(firstName) {
  return `Hello ${firstName}`;
}

// function declaration
const sayHi = function (firstName) {
  console.log(`Hi ${firstName}`);
};

// Arrow function
const saySomethingNice = (firstName) => {
  console.log(`You're great, ${firstName}`);
};

// Parameter vs Argument  (firstName is a parameter)
const sayHelloToJay = sayHello("Jay");
console.log(sayHelloToJay);
sayHi("John");
saySomethingNice("Stranger");

// Non-Primitive Data Types

// Object
const agent = {
  firstName: "Jay",
  lastName: "Mercado",
  birthMonth: "May",
  id: 202132025,
  isAgent: true,
  favoriteNumbers: [1, 2, 3, 4, 5],
  sayHello: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

console.log(agent.firstName);
agent.firstName = "lloyd";
console.log(agent.firstName);

// console.log(agent.lastName);
// console.log(agent.birthMonth);
// agent.sayHello();

// console.log(agent["firstName"]);

// for (key in agent) {
//   console.log(key, agent[key]);
// }

// Array
const numbers = [1, 2, 3, 4, 5];
const values = [1, "Jay", true, { name: "Jay" }, [1, 2, 3, 4, 5]];
console.log(values[3].name);
