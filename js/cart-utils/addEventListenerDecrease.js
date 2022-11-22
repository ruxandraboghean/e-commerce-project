import { decreaseQtyInLS } from "./decreaseQtyInLS.js";
import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";

export const decreaseQuantity = () => {
  let decreaseButtons = $('.decrease-icon');
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < decreaseButtons.length; i++) {
    $(decreaseButtons[i]).click(() => {
      decreaseQtyInLS(productsInCart[i], productsInCart);
      showCartData();
      isMinOrder();
    })
  }
};;
