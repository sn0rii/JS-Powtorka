// // let output;

// // output = document.all;

// // console.log(output);

// // console.log(document.getElementById("app-title"));

// // SET ATTRIBUTES //

// document.getElementById("app-title").title = "Shopping List";
// document.getElementById("app-title").setAttribute("class", "title");

// const title = document.getElementById("app-title");

// // console.log(title.textContent);
// title.textContent = " Hello Man";
// title.innerText = "Hello Again";
// title.innerHTML = "<strong>Shopping List</strong>";

// // CHANGE STYLES

// title.style.color = "red";
// title.style.backgroundColor = "black";
// title.style.padding = "10px";
// title.style.borderRadius = "10px";

// // document.querySelector()

// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#app-title"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("input[type=text"));
// console.log(document.querySelector("li:nth-child(2").innerText);

// const secondItem = document.querySelector("li:nth-child(2");
// secondItem.innerText = "Apple juice";
// secondItem.style.color = "green";

// // use these methods on other elements

// const list = document.querySelector("ul");
// console.log(list);
// const firstItem = list.querySelector("li");
// firstItem.style.color = "red";

// query selector all

const listItem = document.querySelectorAll(".item");
// console.log(listItem[1].innerText);

// listItem[1].style.color = "red";

// listItem.forEach((item) => {
//   item.style.color = "red";
// });

// listItem.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>`;
//   }
// });

// const listItems2 = document.getElementsByClassName("item");

// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// console.log(listItemsArray);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// const listItems3 = document.getElementsByTagName("li");
// console.log(listItems3[0]);

// const witek = {
//   name: "wojtek",
//   nazwisko: "klops",
// };

// console.log(witek);

// const wojtekLista = Object.values(witek);
// console.log(wojtekLista);

// const div = document.createElement("div");
// div.className = "my-element";
// div.id = "my-element";
// div.setAttribute("title", "My Element");

// // div.innerText = "Hello World";
// const text = document.createTextNode("Hello 2");
// div.appendChild(text);

// document.querySelector("ul").appendChild(div);

// console.log(div);

// function createListItem(item) {
//   const li = document.createElement("li");

//   li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;

//   document.querySelector(".items").appendChild(li);
// }

//CLEAN VERSION //

// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement("button");
//   button.className = "remove-item btn-link text-red";

//   const icon = document.createElement("i");
//   icon.className = "fa-solid fa-xmark";

//   button.appendChild(icon);
//   li.appendChild(button);

//   document.querySelector(".items").appendChild(li);
// }

// createListItem("Eggs");
// createNewItem("Cheese");

// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));

//   const button = createButton("remove-item btn-link text-red");

//   li.appendChild(button);

//   document.querySelector(".items").appendChild(li);

//   function createButton(classes) {
//     const button = document.createElement("button");
//     button.className = classes;

//     const icon = createIcon("fa-solid fa-xmark");
//     button.appendChild(icon);

//     return button;
//   }
//   function createIcon(classes) {
//     const icon = document.createElement("i");
//     icon.className = classes;
//     return icon;
//   }
// }

// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// const li = document.querySelector("li");
// li.textContent = "Insert me after";

// const firstItem = document.querySelector("li:first-child");

// createNewItem("Cheese");
// createNewItem("Sausage");

// insertAfter(li, firstItem);
