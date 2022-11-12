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
  console.log(updatedProductsInCart.length, "length");

  if (updatedProductsInCart.length !== 0) {
    const mappedProducts = new Map();
    for (let prod of updatedProductsInCart) {
      mappedProducts.set([prod.id], prod);
    }

    let mappedProductsReformat = [];
    for (let [key, value] of mappedProducts) {
      mappedProductsReformat = {
        ...mappedProductsReformat,
        [key]: value,
      };
    }

    localStorage.setItem(
      "productsInCart",
      JSON.stringify(mappedProductsReformat)
    );
  } else {
    debugger;
    console.log(updatedProductsInCart, "update");
    localStorage.setItem(
      "productsInCart",
      JSON.stringify(updatedProductsInCart)
    );
  }
  updateCartNumbers(decreasedCartNumb);
  updateCartTotal(removedProducts[0]);
};