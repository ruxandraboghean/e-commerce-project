import { updateTotalCart } from "../index-utils/updateIncreasedTotal.js";

export const increaseQtyInLS = (product) => {
  let productNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));

  localStorage.setItem("cartNumbers", productNumbers + 1);

  if (productsInCart) {
    productsInCart = {
      ...productsInCart,
      [product.id]: product,
    };
    productsInCart[product.id].inCart += 1;
  }

  updateTotalCart(product);

  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
};
