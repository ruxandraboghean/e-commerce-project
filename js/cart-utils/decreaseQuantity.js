import { decreaseQtyInLS } from "./decreaseQtyInLS.js";
import { isMinOrder } from "./isMinOrder.js";

import { showCartData } from "./showCartData.js";

export const decreaseQuantity = () => {
  let decreaseButtons = document.querySelectorAll("#decreaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < decreaseButtons.length; i++) {
    let updatedProducts = productsInCart;
    decreaseButtons[i].addEventListener("click", () => {
      decreaseQtyInLS(updatedProducts[i], productsInCart);
      showCartData();
      isMinOrder();
    });
  }
};
