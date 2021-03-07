// ITERATION 1

function updateSubtotal(x) {
  const price = x.querySelector('.price span').innerHTML;
  const quantity = x.querySelector('.quantity input').value;
  const multiply = price*quantity;
  x.querySelector('.subtotal').innerHTML = `${multiply}`;
  console.log('Calculating subtotal, yey!');
  
}


function calculateAll() {
  
 const updateAllProducts = document.getElementsByClassName('.product');

 updateAllProducts.forEach(x => updateSubtotal(x));

  // ITERATION 3
  //... your code goes here
}

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
