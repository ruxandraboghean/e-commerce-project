import { removeProductWithId } from './removeFromCart.js';
import { refreshPage } from './refreshPage.js';

let decreaseButtons = document.querySelectorAll('#decreaseIcon');
console.log( decreaseButtons);
let productsInCart  = localStorage.getItem('paintingsInCart');
productsInCart      =  Object.values(JSON.parse(productsInCart));

for(let i=0; i < decreaseButtons.length; i++)
{
    console.log(decreaseButtons[i])
   

    decreaseButtons[i].addEventListener('click', ()=>{
        let products =productsInCart;
        console.log(products)
        decreaseQuantity(products[i]);
    }) 
}
function decreaseQuantity(product) {
    console.log(product);
    if(product.inCart === 1)
    {
        removeProductWithId(product.id, productsInCart);
    }
    else{
        product.inCart -= 1;
        cartNumbers();
        totalCost(product);
        updateProducts(product);
        refreshPage();
    }
    
    return product;
}
function updateProducts(updatedProduct)
{
    console.log(updatedProduct, "updated");
    console.log(productsInCart, "in cart")

    localStorage.setItem('paintingsInCart', JSON.stringify(productsInCart));
}
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers= parseInt(productNumbers);
    localStorage.setItem('cartNumbers', productNumbers-1);

}
function totalCost(painting){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !== null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - painting.price);
        
    }
}