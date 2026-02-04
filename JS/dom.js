let h1Id = document.querySelector("#h1-id");
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = input.value;
    h1Id.innerHTML = value;
    input.value = "";
    // alert("Clicked");
  });
});
