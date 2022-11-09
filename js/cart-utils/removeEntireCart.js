import { isMinOrder } from "./isMinOrder.js";
import { removeAll } from "./removeAll.js";
import { showCartData } from "./showCartData.js";

export const removeEntireCart = () => {
  let removeButton = document.querySelector("#removeCart");

  removeButton.addEventListener("click", () => {
    removeAll();
    showCartData();
    isMinOrder();
  });
};
