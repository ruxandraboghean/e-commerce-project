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
  } else {
    product.inCart = 1;
    productsInCart = {
      [product.id]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
};
