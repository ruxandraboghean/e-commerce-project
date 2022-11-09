import { isMinOrder } from "./isMinOrder.js";
import { removeItemFromCart } from "./removeItemFromCart.js";
import { showCartData } from "./showCartData.js";

export const decreaseQuantity = () => {
  let decreaseButtons = document.querySelectorAll("#decreaseIcon");
  let productsInCart = Object.values(
    JSON.parse(localStorage.getItem("productsInCart"))
  );

  for (let i = 0; i < decreaseButtons.length; i++) {
    let updatedProducts = productsInCart;
    decreaseButtons[i].addEventListener("click", () => {
      decreaseQtyInLS(updatedProducts[i], productsInCart);
      showCartData();
      isMinOrder();
    });
  }
};

function decreaseQtyInLS(product, productsInCart) {
  let productNumbers = parseInt(localStorage.getItem("cartNumbers"));

  if (product.inCart === 1) {
    removeItemFromCart(product.id, productsInCart);
  } else {
    product.inCart -= 1;

    localStorage.setItem("cartNumbers", productNumbers - 1);
    totalCost(product);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }
}

function totalCost(painting) {
  let cartCost = parseInt(localStorage.getItem("totalCost"));

  if (cartCost !== null) {
    localStorage.setItem("totalCost", cartCost - painting.price);
  }
}
