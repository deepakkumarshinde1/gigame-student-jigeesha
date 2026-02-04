let h1Element = document.querySelector("#text");
let inputElement = document.querySelector("#input");
let buttonElement = document.querySelector("#button");
let parentElement = document.querySelector(".parent");
let childElement = document.querySelector(".child");
let listElement = document.querySelector("#list");

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
});

parentElement.addEventListener("click", () => {
  console.log("parent");
});
childElement.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(".child");
});

(async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url, {});
    let data = await response.json();
    let li = data.map((user) => {
      return `<li>${user.name}</li>`;
    });
    listElement.innerHTML = li.join("");
  } catch (error) {}
})();
