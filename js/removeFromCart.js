import { showCartData } from "./showCartData.js";
import { refreshPage } from './refreshPage.js';

let closeButtons = document.querySelectorAll('#close-button');

for(let i=0; i < closeButtons.length; i++)
{
    let productsInCart  = localStorage.getItem('paintingsInCart');
    productsInCart      = JSON.parse(productsInCart);

   closeButtons[i].addEventListener('click', ()=>{
        let products = Object.values(productsInCart);
        let id = products[i].id;

        removeProductWithId(id,products);
    }) 
}

export function removeProductWithId(id, products){
    let updatedProductsInCart       = products.filter(product => product.id !== id);
    let currentProducts             = localStorage.getItem('paintingsInCart');
        currentProducts             = JSON.parse(currentProducts);
    let currentProduct              = Object.values(currentProducts).filter(product => product.id === id);
    let currentProductNumberInCart  = currentProduct[0].inCart;

    localStorage.setItem('paintingsInCart',JSON.stringify(updatedProductsInCart));

    updateCartNumbers(currentProductNumberInCart);
    updateCartTotal(currentProduct[0]);
    showCartData();
    // refreshPage();
   
}

function updateCartNumbers(decreasedCartNumb) {
    let cartNumb = parseInt(localStorage.getItem('cartNumbers'));

    console.log(cartNumb, 'ss');
    cartNumb -= decreasedCartNumb;
    localStorage.setItem('cartNumbers', cartNumb);
}

function updateCartTotal(currentProduct) {
    let currentProductTotal = currentProduct.price * currentProduct.inCart;
    let updatedTotal        = parseInt(localStorage.getItem('totalCost'));

    updatedTotal -= currentProductTotal;
    localStorage.setItem('totalCost', updatedTotal);
}
