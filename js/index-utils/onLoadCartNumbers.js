export const onLoadCartNumbers = () => {
  let cartNumbers = localStorage.getItem("cartNumbers");
 
  if (cartNumbers) {
   $("#lblCartCount").text(cartNumbers);
  }
};
