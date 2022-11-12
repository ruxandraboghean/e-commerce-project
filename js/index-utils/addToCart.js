import { products } from "./data.js";
import { setItemsInLS } from "./setItemsInLS.js";
import { updateTotalCart } from "./updateTotalCart.js";
import { setCartNumbers } from "./setCartNumbers.js";

export const addToCart = () => {
  let addToCartButtons = document.querySelectorAll(".add-to-cart");

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", () => {
      console.log(addToCartButtons[i]);
      console.log(products[i]);
      setCartNumbers();
      setItemsInLS(products[i]);
      updateTotalCart(products[i]);
    });
  }
};