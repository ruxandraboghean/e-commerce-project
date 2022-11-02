function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers)
  
    if(productNumbers){
        document.querySelector('#lblCartCount').textContent = productNumbers;
    } 
}
onLoadCartNumbers();