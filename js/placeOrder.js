import { removeAll } from "./removeAll.js";

let placeOrderButton = document.querySelector("#placeOrder");
console.log(placeOrderButton, "order");

placeOrderButton.addEventListener("click", () => {
  removeAll();
  alert("The order has been placed");
});
