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
 //let totalSum = document.getElementById("total-value span").innerHTML = `${finalValue}`// Aun por declarar finalvalue y hacer la suma
 
 let finalValue = 0;
 for(let x = 0; x < updateAllProducts.length; x++){   
    updateSubtotal(updateAllProducts[x]);
   
    console.log(x)
 }; 



/*
Our calculation functionality is still incomplete. The subtotal for each product is being updated, 
but the total value remains untouched.

At the end of the `calculateAll()` function, reuse the total value you just calculated in the previous
 iteration and update the corresponding DOM element. Calculate the total price for the products in your
  cart by summing all of the subtotals returned by `updateSubtotal()` when it was called with each product.

Lastly, display that value on your DOM.*/


  // ITERATION 3
  //... your code goes here
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
