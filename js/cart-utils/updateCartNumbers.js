export const updateCartNumbers = (decreasedCartNumb) => {
  let cartNumb = parseInt(localStorage.getItem("cartNumbers"));

  cartNumb -= decreasedCartNumb;
  localStorage.setItem("cartNumbers", cartNumb);
};
