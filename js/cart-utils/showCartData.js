import { displayCart } from "./displayCart.js";

export const showCartData = () => {
  let cartNumbers = parseInt(localStorage.getItem("cartNumbers"));
  let noDataInCart = $(".cart-no-data");
  let productContainer = $(".products-container");

  if (!cartNumbers) {
    productContainer.html("");

    noDataInCart.append(`
        <p class="cart-empty-text">
                Cart is empty.
        </p>
        <div class="no-data">
            <img class="img-empty-cart" src="images/empty-cart.png" width="125" height="125">
        </div>`);
  }
  displayCart();
};
