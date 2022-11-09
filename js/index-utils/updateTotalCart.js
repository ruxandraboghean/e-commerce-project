export const updateTotalCart = (product) => {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
};
