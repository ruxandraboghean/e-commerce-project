export const setCartNumbers = () => {
  let cartNumbers = parseInt(localStorage.getItem("cartNumbers"));

  if (cartNumbers) {
    localStorage.setItem("cartNumbers", cartNumbers + 1);
    document.querySelector("#lblCartCount").textContent = cartNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#lblCartCount").textContent = 1;
  }
};
