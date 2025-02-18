// -----------(OPERATORS)------------//

// arithmetic operators
let a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // gives quotients
console.log(a % b); // remainder
console.log(a ** b); // power

// urinary operator
console.log(a++); // increment +1
console.log(a--); // decrement -1

// assignment operators
a = 10;
b = 2;
console.log(a += b);// a = a + b
console.log(a -= b); // a = a - b
console.log(a **= b); // a = a * b
console.log(a /= b); // a = a * b
console.log(a %= b); // a = a * b

// comparison operators
console.log(a == b); // loose equality (==) doesnt check datatype
console.log(a === b); // strict equality (===)
console.log(a != b); // loose inequality (!==) doesnt check datatype
console.log(a > b); // greater than
console.log(a < b); // less than

// logical operators
a = 5;
b = 5;

console.log(a > 5 && b < 3); // both are true then true otherwise returns false
console.log(a > 5 || b < 2);  // either one is true then true 
console.log("not operator", !a); // returns the opposite of the boolean value 

// --------(CONDITIONAL STATEMENTS)------------//

// if else and else if statements
let age = 25;

if (age > 18) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

let color;
let mode = "dark";

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else {
  color = "white";
}

console.log(color);

// ternary Operators
let age1 = 15;
console.log(age1 > 18 ? "you can vote" : "you cannot vote");

// switch statements
let username = "123";

switch (username) {
  case "color":
    console.log("color value is blue");
    break;

  case "123":
    console.log("size value is large");
    break;

  default:
    console.log("no match found");
    break;
}


// Practice
// const num = prompt("enter a number");
// console.log(num % 5 == 0 ? "it a multiple" : "it is not a multiple");

let score = 1;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
}
else if (score >= 70 && score <= 89) {
  grade = "B";
}
else if (score >= 60 && score <= 69) {
  grade = "C";
}
else if (score >= 50 && score <= 59) {
  grade = "D";
}
else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log(grade)