console.log("Hello World");

let age = 10;
const legalDrivingAge = 17;
let movieRating = "PG";

if (1 > 0) {
  console.log("1 is greater than 0");
}

if (age > legalDrivingAge) {
  console.log("You can drive!");
}

if (age > legalDrivingAge) {
  console.log("You can drive!");
} else {
  console.log("You can't drive yet!");
}

if (age > legalDrivingAge) {
  console.log("You're old enough to drive!");
} else if (age === legalDrivingAge) {
  console.log("You're just old enough to drive!");
} else {
  console.log("You can't drive yet!");
}

function checkAge(age) {
  if (age > 17) {
    return console.log("You can watch any movie!");
  }

  if (age >= 15) {
    return console.log("You can watch PG, U, 12, 15");
  }

  if (age >= 12) {
    return console.log("You can watch PG, U, 12");
  }

  if (age < 12) {
    return console.log("You can watch PG and U");
  }
}

checkAge(age);
checkAge(12);
checkAge(15);
checkAge(18);
