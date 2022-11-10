import { products } from "./data.js";
import { addToCart } from "./addToCart.js";
import { onLoadCartNumbers } from "./onLoadCartNumbers.js";

export function displayProducts() {
  let productItems = document.getElementById("product-container");

  productItems.innerHTML = products
    .map(
      (product) =>
        `<div class="grid-item" id=${product.id}>
            <img class="img-paintings" src=${product.img} width="230" height="300">
            <h5 class="name">${product.name}</h5>
            <h6 class="price">Price: ${product.price}$</h6>
            <button class="add-to-cart">Add</button>
         </div>`
    )
    .join("");
  addToCart();
  onLoadCartNumbers();
}
