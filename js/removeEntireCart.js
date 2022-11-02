import { refreshPage } from "./refreshPage.js";

export function removeEntireCart(){
    let removeButton = document.querySelector('#removeCart');
    removeButton.addEventListener('click', () => {
        console.log(removeButton);
        removeAll();
    });
    
}

export function removeAll() {
    localStorage.clear();
    refreshPage();
}