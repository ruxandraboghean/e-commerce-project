import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";
import { removeItemFromCart } from "./removeItemFromCart.js";

export const removeFromCart = () => {
  let closeButtons = document.querySelectorAll("#close-button");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", () => {
      let productId = productsInCart[i].id;
      console.log(productId);

      removeItemFromCart(productId, productsInCart);
      showCartData();
      isMinOrder();
    });
  }
};
