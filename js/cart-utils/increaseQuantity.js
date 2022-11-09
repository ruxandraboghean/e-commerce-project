import { isMinOrder } from "./isMinOrder.js";
import { showCartData } from "./showCartData.js";

export const increaseQuantity = () => {
  let increaseButtons = document.querySelectorAll("#increaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", () => {
      let products = productsInCart;
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
  totalCost(product);
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

function totalCost(painting) {
  let cartCost = parseInt(localStorage.getItem("totalCost"));

  if (cartCost !== null) {
    localStorage.setItem("totalCost", cartCost + painting.price);
  }
}
