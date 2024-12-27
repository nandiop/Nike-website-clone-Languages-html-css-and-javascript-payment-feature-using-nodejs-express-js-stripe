const cartContainer = document.querySelector('.cart-container');
const checkout = document . querySelector('.checout')
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const totalPriceElement = document.getElementById('total-price');
const totalItemElement = document.getElementById('total-items');
const EmptyText = document .querySelector('.Empty-Text');
const checkoutButton = document.querySelector('.checkoutButton');




function renderCartItems() {
    cartContainer.innerHTML = ''; // Clear existing content
    
    cartItems.forEach((item, index) => {
        // Update price

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p class="empty-cart-message">Cart is empty</p>';
            totalPriceElement.textContent = '$0.00'; // Reset total price to $0.00
            return; // Stop further execution
        }

        
    
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="product-img">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            </td>
            <td class="product-details">
                <div class="details-container">
                    <p class="product-name">${item.name}</p>
                    <p class="product-description">${item.description}</p>
                    <p class="product-price"> $ ${item.price}</p>
                </div>
            </td>
            <td class="buttons-re-quant">
                <button class="remove-button" data-index="${index}">Remove</button>
                <div class = "quantity-counter">
                    <div class="quantity-text">Qty:</div>
                    <button class = "minus">-</button>
                    <input type="text" class = "counter-box" value = "1" id = "quantity">
                    <button class = "plus">+</button>
                </div>
                
            </td>
        `;
        cartContainer.appendChild(row);
        EmptyText.style.display = "none";

        
    });
    

    const minusButton = document.querySelectorAll('.minus');
    const plusButton = document.querySelectorAll('.plus');
    const countValue = document.querySelectorAll('.counter-box');

    plusButton.forEach((button, i) => {
        button.addEventListener('click', function()
            {
                let quantityInput = countValue[i];
                let quantity = parseInt(quantityInput.value) || 0;
                quantity=quantity+1;
                quantityInput.value = quantity;
                let quantities = JSON.parse(localStorage.getItem('quantities')) || {};
                quantities[i] = quantity; // Save the quantity for this specific item
                localStorage.setItem('quantities', JSON.stringify(quantities));

             
            });
});

    minusButton.forEach((button, i) => {
        button.addEventListener('click', function () {
            let quantityInput = countValue[i]; // Get the corresponding counter-box element
            let quantity = parseInt(quantityInput.value) || 0; // Get current quantity or default to 0
            if (quantity > 0) {
                quantity=quantity-1; // Decrement quantity only if greater than 0
            }

            quantityInput.value = quantity;
            let quantities = JSON.parse(localStorage.getItem('quantities')) || {};
                quantities[i] = quantity; // Save the quantity for this specific item
                localStorage.setItem('quantities', JSON.stringify(quantities));
            ; // Update the input value
        });
});  


document.addEventListener('DOMContentLoaded', () => {
    const quantities = JSON.parse(localStorage.getItem('quantities')) || {};
    countValue.forEach((input, i) => {
        if (quantities[i] !== undefined) {
            input.value = quantities[i];
        }
    });
});

    // Attach event listeners to "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'), );
            removeItem(index);
        });
    });
}


checkoutButton.addEventListener('click', async (event) => {
    event.preventDefault();

    // Calculate total price
    let checkoutTotalPrice = 0;
    let totalItems = 0;
    cartItems.forEach((item, index) => {
        const quantity = JSON.parse(localStorage.getItem('quantities'))?.[index] || 1;
        const price = parseFloat(item.price) || 0;
        checkoutTotalPrice += price * quantity; 
        totalItems += quantity;
    });

    // Send total price to the server
    try {
        const response = await fetch('/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ checkoutTotalPrice, totalItems }),
        });

        if (response.ok) {
            const { url } = await response.json(); // Get the Stripe session URL
            window.location.href = url; // Redirect to Stripe checkout
        } else {
            console.error('Failed to initiate checkout.');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
    }
});


var displayTotalPrice = 0; 
var checkoutTotalPrice = 0; 
var totalItems = 0; 

cartItems.forEach((item, index) => {
    
    const quantity = JSON.parse(localStorage.getItem('quantities'))?.[index] ;

        if(cartItems.length === 0)
        {
            quantity[index] === null;
        }

    const price = parseFloat(item.price) || 0;
    displayTotalPrice += price * quantity; 
    checkoutTotalPrice += price * quantity; 
    totalItems += quantity; 

        
})
totalPriceElement.textContent = `$ ${displayTotalPrice}`;
totalItemElement.textContent = `${totalItems}`;

function removeItem(index) {
    cartItems.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
    let quantity = JSON.parse(localStorage.getItem('quantities'))?.[index] ;
    delete quantity[index]; 
    renderCartItems(); // Re-render the cart
}


renderCartItems();
