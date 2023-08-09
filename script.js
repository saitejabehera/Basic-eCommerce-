

document.addEventListener('DOMContentLoaded', function () {
    const cartItemsElement = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');
  
    let cartItems = [];
    let cartTotal = 0;
  
    function updateCart() {
      cartItemsElement.innerHTML = '';
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsElement.appendChild(listItem);
      });
      cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
      document.querySelector('.cart-count').textContent = cartItems.length;
    }
  
    function addToCart(productName, price) {
      const existingItem = cartItems.find(item => item.name === productName);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push({ name: productName, price: price, quantity: 1 });
      }
      cartTotal += price;
      updateCart();
    }
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productName = this.dataset.product;
        const price = parseFloat(this.dataset.price);
        addToCart(productName, price);
      });
    });
  
    // Show/hide cart dropdown when cart icon is clicked
    cartIcon.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
  


