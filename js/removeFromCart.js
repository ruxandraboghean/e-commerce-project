import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";

let closeButtons = document.querySelectorAll("#close-button");
console.log(closeButtons, "closeBtn");

for (let i = 0; i < closeButtons.length; i++) {
  let productsInCart = localStorage.getItem("paintingsInCart");
  productsInCart = JSON.parse(productsInCart);

  closeButtons[i].addEventListener("click", () => {
    let products = Object.values(productsInCart);
    let id = products[i].id;

    removeProductWithId(id, products);
    showCartData();
    isMinOrder();
  });
}

export function removeProductWithId(id, products) {
  let updatedProductsInCart = products.filter((product) => product.id !== id);
  let currentProducts = localStorage.getItem("paintingsInCart");
  currentProducts = JSON.parse(currentProducts);
  let currentProduct = Object.values(currentProducts).filter(
    (product) => product.id === id
  );
  let currentProductNumberInCart = currentProduct[0].inCart;

  localStorage.setItem(
    "paintingsInCart",
    JSON.stringify(updatedProductsInCart)
  );

  updateCartNumbers(currentProductNumberInCart);
  updateCartTotal(currentProduct[0]);
}

function updateCartNumbers(decreasedCartNumb) {
  let cartNumb = parseInt(localStorage.getItem("cartNumbers"));

  cartNumb -= decreasedCartNumb;
  localStorage.setItem("cartNumbers", cartNumb);
}

function updateCartTotal(currentProduct) {
  let currentProductTotal = currentProduct.price * currentProduct.inCart;
  let updatedTotal = parseInt(localStorage.getItem("totalCost"));

  updatedTotal -= currentProductTotal;
  localStorage.setItem("totalCost", updatedTotal);
}
