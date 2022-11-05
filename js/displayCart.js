export function displayCart() {
  let cartItems = localStorage.getItem("paintingsInCart");
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");
  let productHeader = document.querySelector(".product-header-cart");
  cartItems = JSON.parse(cartItems);

  if (cartItems && productContainer) {
    if (cartItems.length !== 0) {
      productContainer.innerHTML = "";
      productHeader.innerHTML = "";

      productHeader.innerHTML += `
            <div class="product-header">
                <h5 class="product-name">Product Name</h5>
                <h5 class="product-price-cart">Price</h5>
                <h5 class="quantity">Quantity</h5>
                <h5 class="total">TOTAL</h5>
            </div>
            `;

      Object.values(cartItems).map((item) => {
        productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-circle-outline" id="close-button"></ion-icon>
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
                `;
      });

      productContainer.innerHTML += `
                <div class="cartTotalContainer">
                    <h1 class="cartTotalTitle">
                        TOTAL
                    </h4>
                    <h4 class="cartTotal">
                        $${cartCost}
                    </h4>
                </div>
                <div class="cart-footer">
                    <div class="remove-cart">
                        <button id="removeCart"> Goleste cos </button>
                    </div>
                    <div class="place-order">
                        <button id="placeOrder"> Place order </button>
                    </div>
                    
                </div>
                `;
    }
  }
}
