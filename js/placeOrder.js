import { removeAll } from "./removeEntireCart.js";

export function placeOrder() {
    let placeOrderButton = document.querySelector('#placeOrder');

    placeOrderButton.addEventListener("click", () => {
        removeAll();
        alert('The order has been placed');
    })
}