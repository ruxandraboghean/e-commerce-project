import { updateTotalCost } from "./updateTotalCost.js";
import { removeItemFromCart } from "./removeItemFromCart.js";

export const decreaseQtyInLS = (product, products) => {
  let productNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));

  if (product.inCart === 1) {
    removeItemFromCart(product.id, products);
  } else {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    productsInCart = {
      ...productsInCart,
      [product.id]: product,
    };
    productsInCart[product.id].inCart -= 1;
    updateTotalCost(product);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }
};
