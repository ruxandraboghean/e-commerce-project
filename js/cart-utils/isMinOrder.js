export function isMinOrder() {
  let totalCost = parseInt(localStorage.getItem("totalCost"));
  let minTotalCart = $(".min-total-cart");

  if (totalCost < 20 || !totalCost) {
    minTotalCart.html("");
    minTotalCart.append(`
            <img src="../images/wage.png" class="img-min-order" width=35 height=30>
            <p class="txt-min-order">
                Minimum order is 20$.
            </p>
        `);
  }
}
isMinOrder();
