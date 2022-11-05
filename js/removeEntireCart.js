import { removeAll } from "./removeAll.js";

let removeButton = document.querySelector("#removeCart");

removeButton.addEventListener("click", () => {
  console.log(removeButton);
  removeAll();
});
