import { refreshPage } from './refreshPage.js';

let increaseButtons = document.querySelectorAll('#increaseIcon');
console.log( increaseButtons);
let productsInCart  = localStorage.getItem('paintingsInCart');
productsInCart      =  Object.values(JSON.parse(productsInCart));

for(let i=0; i < increaseButtons.length; i++)
{
    console.log(increaseButtons[i])
   

   increaseButtons[i].addEventListener('click', ()=>{
        let products =productsInCart;
        console.log(products)
        let updatedProduct = increaseQuantity(products[i]);
        updateProducts(updatedProduct);
        refreshPage();
    }) 
}
function increaseQuantity(product) {
    console.log(product);
    product.inCart += 1;
    cartNumbers();
    totalCost(product);
    
    return product;
}
function updateProducts(updatedProduct)
{
    console.log(updatedProduct);
    let newProducts = JSON.stringify(productsInCart);
    console.log(newProducts)
    localStorage.setItem('paintingsInCart', newProducts);
}
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers= parseInt(productNumbers);
    localStorage.setItem('cartNumbers', productNumbers+1);

}
function totalCost(painting){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !== null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + painting.price);
        
    } else {
        localStorage.setItem('totalCost', painting.price);
    }
}