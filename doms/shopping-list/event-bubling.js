const button = document.querySelector("form button");
const div2nd = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("Button was clicked");
  e.stopPropagation();
});

div2nd.addEventListener("click", () => {
  alert("Div was clicked");
});

form.addEventListener("click", () => {
  alert("Form was clicked");
});

document.body.addEventListener("click", () => {
  alert("Body was clicked");
});
