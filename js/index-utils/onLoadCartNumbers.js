export const onLoadCartNumbers = () => {
  let cartNumbers = localStorage.getItem("cartNumbers") || "0";
  console.log(cartNumbers);

  if (cartNumbers) {
    document.querySelector("#lblCartCount").textContent = cartNumbers;
  }
};
