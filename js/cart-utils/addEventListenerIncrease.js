import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";
import { increaseQtyInLS } from "./increaseQtyInLS.js";

export const increaseQuantity = () => {
  let increaseButtons = document.querySelectorAll("#increaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < increaseButtons.length; i++) {
    let products = productsInCart;

    increaseButtons[i].addEventListener("click", () => {
      increaseQtyInLS(products[i]);
      showCartData();
      isMinOrder();
    });
  }
};
