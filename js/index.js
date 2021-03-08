// ITERATION 1

function updateSubtotal(x) {
  const price = x.querySelector('.price span').innerHTML;
  const quantity = x.querySelector('.quantity input').value;
  const multiply = price*quantity;
  x.querySelector('.subtotal').innerHTML = `${multiply}`;
  console.log('Calculating subtotal, yey!');
  
}

console.log("hello")


function calculateAll() {
  
 let updateAllProducts = document.getElementsByClassName("product");  
 
 for(let x = 0; x < updateAllProducts.length; x++){   
   updateSubtotal(updateAllProducts[x]);
   console.log(x)
 }; 



 let multipliedProducts = document.getElementsByClassName("subtotal");
 console.log(multipliedProducts)
 
 
 let finalValue = 0;
 for(let i = 0; i < multipliedProducts.length; i++){   
    finalValue += parseFloat(multipliedProducts[i].innerHTML)
    console.log("finalvalue =" + finalValue)
};

document.getElementById("total-value").innerHTML = `${finalValue}`;



}

calculateAll()

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
