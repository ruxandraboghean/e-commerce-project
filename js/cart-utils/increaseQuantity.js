import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";
import { increaseQtyInLS } from "./increaseQtyInLS.js";

export const increaseQuantity = () => {
  let increaseButtons = document.querySelectorAll("#increaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", () => {
      let products = productsInCart;
      console.log(products);
      increaseQtyInLS(products[i]);
      showCartData();
      isMinOrder();
    });
  }
};
