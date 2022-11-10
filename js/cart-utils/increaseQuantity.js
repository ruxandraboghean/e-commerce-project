import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";
import { updateTotalCart } from "../index-utils/updateTotalCart.js";

export const increaseQuantity = () => {
  let increaseButtons = document.querySelectorAll("#increaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", () => {
      let products = productsInCart;
      console.log(products);
      increaseQtyInLS(products[i], productsInCart);
      showCartData();
      isMinOrder();
    });
  }
};
function increaseQtyInLS(product, productsInCart) {
  let productNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;

  product.inCart += 1;

  localStorage.setItem("cartNumbers", productNumbers + 1);
  updateTotalCart(product);
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}