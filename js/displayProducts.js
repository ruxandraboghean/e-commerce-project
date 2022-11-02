import { paintings } from '../js//data.js';

function displayProducts(){
    let paintingItems = document.getElementById('product-container');

    paintingItems.innerHTML = paintings.map(painting =>
        `<div class="grid-item" id=${painting.id}>
            <img class="img-paintings" src=${painting.img} width="230" height="300">
            <h5 class="name">${painting.name}</h5>
            <h6 class="price">Price: ${painting.price}$</h6>
            <button class="add-to-cart">Add</button>
         </div>`
    ).join('');
}
displayProducts();