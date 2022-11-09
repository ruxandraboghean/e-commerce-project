import { updateCartTotal } from "./updateCartTotal.js";
import { updateCartNumbers } from "./updateCartNumbers.js";

export const removeItemFromCart = (productId, products) => {
  let updatedProductsInCart = products.filter(
    (product) => product.id !== productId
  );
  let currentProducts = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );
  let removedProducts = currentProducts.filter(
    (product) => product.id === productId
  );
  let decreasedCartNumb = removedProducts[0].inCart;

  localStorage.setItem("productsInCart", JSON.stringify(updatedProductsInCart));

  updateCartNumbers(decreasedCartNumb);
  updateCartTotal(removedProducts[0]);
};
