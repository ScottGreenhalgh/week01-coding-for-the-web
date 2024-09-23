console.log("Hello world!");

console.log(document);

const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1.textContent);

//change text content
h1.textContent = "alternative h1 JS title text";
console.log(h1.textContent);

//select an id
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

//select a class
const myH2 = document.querySelector(".main-subtitle");
console.log(myH2);
console.dir(myH2); //property tree viewer

myH2.textContent = "written with JS";

//create html element
const newImage = document.createElement("img");
console.log(newImage);
console.dir(newImage);

newImage.src =
  "https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg";
newImage.alt = "Image added with JS";

//style image
newImage.className = "main-image";

//attach image to page with child (newImage) and append to html (mainContainer)
mainContainer.appendChild(newImage);

//only in user intraction scenario, add css to element
document.body.style.backgroundColor = "cyan";

//remove html element
const pageFoot = document.querySelector("footer");
pageFoot.remove();

// li list item, ul unordered list, ol ordered list
const newListElement = document.createElement("ol");
const newList1 = document.createElement("li");
const newList2 = document.createElement("li");
const newList3 = document.createElement("li");
const newList4 = document.createElement("li");

newListElement.className = "main-list";
newList1.textContent = "Epic list pt1";
newList2.textContent = "Epic list pt2";
newList3.textContent = "Epic list pt3";
newList4.textContent = "Epic list pt4";

mainContainer.appendChild(newListElement);
newListElement.appendChild(newList1);
newListElement.appendChild(newList2);
newListElement.appendChild(newList3);
newListElement.appendChild(newList4);

console.log(newListElement);
