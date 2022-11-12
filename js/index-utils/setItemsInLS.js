export const setItemsInLS = (product) => {
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));

  if (productsInCart !== null) {
    if(productsInCart[product.id])
    {
      let inCart = productsInCart[product.id].inCart;
      product.inCart = inCart;
    }
    productsInCart = {
      ...productsInCart,
      [product.id]: product,
    };
    productsInCart[product.id].inCart += 1;
    console.log(product, "product in cart is NOT null");
    console.log(productsInCart, "list of products in cart is NOT null");
  } else {
    product.inCart = 1;
    productsInCart = {
      [product.id]: product,
    };
    console.log(product, "product in cart is null");
    console.log(productsInCart, "list of products in cart is null");
  }

  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
};