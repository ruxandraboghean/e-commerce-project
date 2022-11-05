import { removeAll } from "./removeAll.js";
import { showCartData } from "./showCartData.js";

let removeButton = document.querySelector("#removeCart");

removeButton.addEventListener("click", () => {
  console.log(removeButton, "remoove");
  removeAll();
  showCartData();
});
