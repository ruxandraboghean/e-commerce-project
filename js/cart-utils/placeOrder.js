import { removeAll } from "./removeAll.js";
import { showCartData } from "./showCartData.js";

export const placeOrder = () => {
  let placeOrderButton = $("#placeOrder");

  $(placeOrderButton).click(() => {
    removeAll();
    alert("The order has been placed");
    showCartData();
  })
};;
