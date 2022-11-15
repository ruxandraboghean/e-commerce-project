export const updateItemRemovedTotal = (currentProduct) => {
  let currentProductTotal = currentProduct.price * currentProduct.inCart;
  let updatedTotal = parseInt(localStorage.getItem("totalCost"));

  updatedTotal -= currentProductTotal;
  localStorage.setItem("totalCost", updatedTotal);
};
