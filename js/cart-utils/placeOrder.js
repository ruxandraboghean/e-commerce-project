import { removeAll } from "./removeAll.js";
import { showCartData } from "./showCartData.js";

export const placeOrder = () => {
  let placeOrderButton = document.querySelector("#placeOrder");

  placeOrderButton.addEventListener("click", () => {
    removeAll();
    alert("The order has been placed");
    showCartData();
  });
};
