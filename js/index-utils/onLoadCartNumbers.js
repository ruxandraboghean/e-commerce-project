export const onLoadCartNumbers = () => {
  let cartNumbers = localStorage.getItem("cartNumbers");
 
  if (cartNumbers) {
    document.querySelector("#lblCartCount").textContent = cartNumbers;
  }
};
