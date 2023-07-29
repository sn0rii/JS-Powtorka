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
console.log(listItem[1]);
