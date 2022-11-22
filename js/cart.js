import { showCartData } from "./cart-utils/showCartData.js";

const initCart = () => {
  showCartData();
  $(document).ready(function () {
    $("#arata").click(function () {
      $("#products").slideToggle();
    });
  });
};

initCart();
