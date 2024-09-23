console.log("Hello world!");

//numbers
let myNumber = 1;
console.log(myNumber);

let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;

console.log(sweets);

//strings
let myName = "Bob";
console.log(myName);

let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName);

fullName = `${firstName} ${lastName}`;

console.log(fullName);

firstName = "Imhotep";
console.log(`${firstName} is ${firstName.length} characters long`);

//booleans
let isTrue = true;
console.log(isTrue);

let isFalse = false;
console.log(isFalse);

//undefined variables

let myEmptyVariable;
console.log(myEmptyVariable);
console.log(typeof myEmptyVariable);

//null

let nullVariable = null;
console.log(nullVariable);
console.log(typeof nullVariable);

// int of 0
let zeroVariable = 0;
console.log(zeroVariable);
console.log(typeof zeroVariable);

// comparisons
let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
console.log(`Is ${a} less than ${b}?`, isALessThanB);
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);

//length property

console.log(firstName.length);
console.log(lastName.length);

const sentence = `My name is ${firstName} ${lastName}, and that's 100% ${isTrue}. Today we've been experimenting with something called an ${typeof nullVariable}. Important sidenote, this is all ${isFalse}.`;

console.log(sentence);
