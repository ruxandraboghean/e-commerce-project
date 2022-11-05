import { paintings } from "../js//data.js";
import { showCartData } from "./showCartData.js";

let carts = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(paintings[i]);
    totalCost(paintings[i]);
  });
}

function cartNumbers(painting) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#lblCartCount").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#lblCartCount").textContent = 1;
  }

  setItems(painting);
}

function setItems(painting) {
  let cartItems = localStorage.getItem("paintingsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[painting.id] === undefined) {
      cartItems = {
        ...cartItems,
        [painting.id]: painting,
      };
    }
    cartItems[painting.id].inCart += 1;
  } else {
    painting.inCart = 1;
    cartItems = {
      [painting.id]: painting,
    };
  }

  localStorage.setItem("paintingsInCart", JSON.stringify(cartItems));
}

function totalCost(painting) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + painting.price);
  } else {
    localStorage.setItem("totalCost", painting.price);
  }
}
showCartData();
