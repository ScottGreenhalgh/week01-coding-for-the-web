console.log("Hello!");
console.log("is this working");

//variables
let myName = "Scott";
const myLocation = "Norwich"; //constant variables cannot be reassigned

console.log(myName);
console.log(myLocation);

//concatenation
console.log("My name is " + myName + " living in " + myLocation);

//template literal
console.log(`My name is ${myName} living in ${myLocation}`);

let myNumber = 5;
let mySecondNumber = 3;
let mySum = myNumber + mySecondNumber + 7;

console.log(myNumber);
console.log(mySecondNumber);
console.log(mySum);

myNumber = 7;
mySecondNumber = 5;
// mySum will still use the previous values when it was defined
console.log(mySum);

mySum = myNumber + mySecondNumber + 7;

console.log(myNumber);
console.log(mySecondNumber);
console.log(mySum);
