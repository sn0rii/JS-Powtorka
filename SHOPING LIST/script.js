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

// const listItem = document.querySelectorAll(".item");
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

//REPLACED

// function replaceFirstItem() {
//   const firstItem = document.querySelector("li:first-child");

//   const li = document.createElement("li");
//   li.textContent = "Replaced First";

//   firstItem.replaceWith(li);
// }

// function replaceSecondItem() {
//   const secondItem = document.querySelector("li:nth-child(2)");
//   secondItem.outerHTML = "<li>Replaced Second </li>";
// }

// function replaceAllItems() {
//   const lis = document.querySelectorAll("li");
// lis.forEach((item, index) => {
//   // item.outerHTML = "<li>Replaced All </li>";

//   if (index === 1) {
//     item.innerHTML = "Replace this";
//   } else item.innerHTML = "Replace 2";
// });

//   lis.forEach(
//     (item, index) =>
//       (item.outerHTML = index === 1 ? "<li>Second Items</li>" : "<li>Item</li>")
//   );
// }

// function replaceChildHeading() {
//   const header = document.querySelector("header");
//   const h1 = document.querySelector("header h1");

//   const h2 = document.createElement("h2");
//   h2.id = "app-title";
//   h2.textContent = "Shopping List 2";
//   header.replaceChild(h2, h1);
// }

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();

//REMOVE ELEMENTS

// function removeClearButton() {
//   const clearBtn = document.querySelector("#clear");
//   clearBtn.remove();
// }
// function removeFirstElement() {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector("li:first-child");

//   ul.removeChild(li);
// }

// function removeItem(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);

//   ul.removeChild(li);
// }
// function removeItem2(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelectorAll("li")[itemNumber - 1];

//   ul.removeChild(li);
// }

// function removeItem3(itemNumber) {
//   const li = document.querySelectorAll("li");
//   li[itemNumber - 1].remove();
// }

// const removeItem4 = (itemNumber) =>
//   document.querySelectorAll("li")[itemNumber - 1].remove();

// removeClearButton();
// removeFirstElement();
// removeItem(2);
// removeItem2();
// removeItem3(3);
// removeItem4(2);

///////

// const clearBtn = document.querySelector("#clear");

// function onClear() {
//   const itemList = document.querySelector("ul");
//   const items = document.querySelectorAll("li");

//   //   itemList.innerHTML = "";

//   items.forEach((item) => item.remove());
// }

// JS event listener

// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

//addEventListener

// clearBtn.addEventListener("click", () => alert("clear list"));

// clearBtn.addEventListener("click", () => console.log("clear list"));

// clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

// const logo = document.querySelector("img");

// const onClick = () => console.log("click");
// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== "red") {
//     document.body.style.backgroundColor = "red";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// };
// const onRightClick = () => console.log("right click event");

// const onMouseDown = () => console.log("mouse down event");
// const onMouseUp = () => console.log("mouse up event");
// const onMouseWheel = () => console.log("mouse wheel event");
// const onMouseOver = () => console.log("mouse over event");
// const onMouseOut = () => console.log("mouse out event");
// const onDragStart = () => console.log(" drag start event");
// const onDrag = () => console.log(" drag event");
// const onDragEnd = () => console.log(" drag end event");

// // event listener
// logo.addEventListener("click", onClick);
// logo.addEventListener("dblclick", onDoubleClick);
// logo.addEventListener("contextmenu", onRightClick);
// logo.addEventListener("mousedown", onMouseDown);
// logo.addEventListener("mouseup", onMouseUp);
// logo.addEventListener("wheel", onMouseWheel);
// logo.addEventListener("mouseover", onMouseOver);
// logo.addEventListener("mouseout", onMouseOut);
// logo.addEventListener("dragstart", onDragStart);
// logo.addEventListener("drag", onDrag);
// logo.addEventListener("dragend", onDragEnd);

// const logo = document.querySelector("img");

// function onClick(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   e.target.style.backgroundColor = "red";
//   console.log(e.type);
//   console.log(e.timeStamp);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.pageX);
//   console.log(e.pageY);
//   console.log(e.screenX);
//   console.log(e.screenY);
// }
// function onDrag(e) {
//   document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener("click", onClick);
// logo.addEventListener("drag", onDrag);

// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Link was clicked");
// });

// const itemInput = document.getElementById("item-input");

// const onKeyPress = (e) => {
//   console.log("keypress");
// };
// const onKeyUp = (e) => {
//   console.log("key up");
// };
// const onKeyDown = (e) => {
//key
//   if (e.key === "Enter") {
//     alert("you press enter");
//   }
//   document.querySelector("h1").innerText = e.key;
//keyCode
//   if (e.keyCode === 13) {
//     alert("You press Enter");
//   }

//   //code
//   if (e.code === "Digit1") {
//     alert("You press 1");
//   }

//   if (e.repeat) {
//     console.log("You are holding down " + e.key);
//   }

//   console.log("Shift: " + e.shiftKey);
//   console.log("Alt: " + e.altKey);
//   console.log("Ctrl: " + e.ctrlKey);

//   if (e.shiftKey && e.key === "K") {
//     console.log("You hit shift + K");
//   }
// };

// // itemInput.addEventListener("keypress", onKeyPress)
// // itemInput.addEventListener("keyup", onKeyUp);

// itemInput.addEventListener("keydown", onKeyDown);

////////
// INPUT ELEMENTS
////////

// const itemInput = document.getElementById("item-input");
// const priorityInput = document.getElementById("priority-input");
// const checkbox = document.getElementById("checkbox");
// const heading = document.querySelector("h1");

// const onInput = (e) => {
//   heading.textContent = e.target.value;
// };

// const onCheck = (e) => {
//   const isChecked = e.target.checked;
//   heading.textContent = isChecked ? "Checked" : "Not Checked";
// };

// const onFocus = (e) => {
//   console.log("input is focus");
//   itemInput.style.outlineStyle = "solid";
//   itemInput.style.outlineWidth = "3px";
//   itemInput.style.outlineColor = "green";
// };

// const onBlur = (e) => {
//   console.log("input is not focused");
//   itemInput.style.outlineStyle = "none";
// };

// itemInput.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);
// checkbox.addEventListener("input", onCheck);
// itemInput.addEventListener("focus", onFocus);
// itemInput.addEventListener("blur", onBlur);

//  FORM SUBMISSION & FORM OBJECT

const form = document.getElementById("item-form");

const onSubmit = (e) => {
  e.preventDefault();

  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  if (item === "" || priority === "0") {
    alert("PLease fill in all fields");
    return;
  }

  console.log(item, priority);
};

const onSubmit2 = (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  // console.log(formData);

  const item = formData.get("item");
  const priority = formData.get("priority");

  const entries = formData.entries();
  // console.log(entries);

  for (let entry of entries) {
    console.log(entry[1]);
  }

  // console.log(item, priority);
};

form.addEventListener("submit", onSubmit2);
