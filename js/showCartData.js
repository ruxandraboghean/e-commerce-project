import { displayCart } from "./displayCart.js";

export function showCartData() {
    let cartItems = parseInt(localStorage.getItem('cartNumbers'));
    console.log(cartItems, 'cartItems');
    let noDataInCart = document.querySelector('.cart-no-data');
    let productContainer = document.querySelector('.products-container');
    console.log(productContainer);

    if(!cartItems)
    {
        noDataInCart.innerHTML = '';
        productContainer.innerHTML ='';

        noDataInCart.innerHTML += `
        <p class="cart-empty-text">
                Cart is empty.
        </p>
        <div class="no-data">
            <img class="img-empty-cart" src="images/empty-cart.png" width="125" height="125">
        </div>`
    }
    displayCart();
} 