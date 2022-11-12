export const updateTotalCost = (product) => {
  let cartCost = parseInt(localStorage.getItem("totalCost"));

  if (cartCost !== null) {
    localStorage.setItem("totalCost", cartCost - product.price);
  }
};
