import { showCartData } from "./cart-utils/showCartData.js";
import { onLoadCartNumbers } from "./index-utils/onLoadCartNumbers.js";

const initCart = () => {
  showCartData();
  onLoadCartNumbers();
  //check local storage for items
  //show html based on ls
  // add event listeners
};

initCart();
