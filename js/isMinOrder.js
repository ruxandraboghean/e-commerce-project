export function isMinOrder() {
  let totalCost = parseInt(localStorage.getItem("totalCost"));
  let minTotalCart = document.querySelector(".min-total-cart");

  if (totalCost < 20 || !totalCost) {
    minTotalCart.innerHTML = "";
    minTotalCart.innerHTML += `
            <img src="../images/wage.png" class="img-min-order" width=35 height=30>
            <p class="txt-min-order">
                Minimum order is 20$.
            </p>
        `;
  }
}
isMinOrder();
