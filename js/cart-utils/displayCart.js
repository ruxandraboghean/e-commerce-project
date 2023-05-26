import { decreaseQuantity } from "./addEventListenerDecrease.js";
import { removeFromCart } from "./addEventListenerRemove.js";
import { increaseQuantity } from "./addEventListenerIncrease.js";
import { placeOrder } from "./placeOrder.js";
import { removeEntireCart } from "./removeEntireCart.js";

export const displayCart = () => {
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  let totalCartCost = localStorage.getItem("totalCost");
  let productContainer = $(".products");
  let productHeader = $(".product-header-cart");

  if (productsInCart && productContainer) {
    if (productsInCart.length !== 0) {
      productHeader.html("");

      productHeader.append(`
            <div class="product-header">
                <h5 class="product-name">Product</h5>
                <h5 class="product-price-cart">Price</h5>
                <h5 class="quantity">Quantity</h5>
                <h5 class="total">TOTAL</h5>
            </div>
            `);

      productContainer.html("");
      Object.values(productsInCart).map((item) => {
        productContainer.append(`
                <div class="product">
                    <ion-icon name="close-circle-outline" class="close-button" id="close-button"></ion-icon>
                    <img src="./images/painting${item.id}.jpg">
                    <span class="product-name">${item.name} </span>
                </div>
                <div class="product-price-cart">${item.price}</div>
                <div class="quantity">
                    <ion-icon name="remove-circle-outline" class="decrease-icon" id="decreaseIcon"> </ion-icon>
                            ${item.inCart}
                    <ion-icon name="add-circle-outline" class="increase-icon" id="increaseIcon"></ion-icon>
                </div>
                <div class="total">${item.inCart * item.price},00</div>
                `);
      });

      productContainer.append(`
            <div class="cartTotalContainer">
                <h1 class="cartTotalTitle">
                    TOTAL
                </h4>
                <h4 class="cartTotal">
                    $${totalCartCost}
                </h4>
            </div>
            <div class="cart-footer">
                <div class="remove-cart">
                    <button id="removeCart"> Empty cart </button>
                </div>
                <div class="place-order">
                    <button id="placeOrder"> Place order </button>
                </div>
            </div>
            `);
    }
    decreaseQuantity();
    increaseQuantity();
    removeFromCart();
    placeOrder();
    removeEntireCart();
  }
};
