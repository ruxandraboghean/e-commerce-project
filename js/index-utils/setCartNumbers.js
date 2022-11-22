export const setCartNumbers = () => {
  let cartNumbers = parseInt(localStorage.getItem("cartNumbers"));

  if (cartNumbers) {
    localStorage.setItem("cartNumbers", cartNumbers + 1);
    $("#lblCartCount").html(cartNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
    $("#lblCartCount").html(1);
  }
};
