const filter = document.querySelector('.filter')
const container5 = document.querySelector('.container-5')
const container6 = document.querySelector('.container-6')
const productimg = document.querySelector('.product-img')
const producttitle = document.querySelector('.product-title')
const itemcounter = document.querySelector('.item-counter');
const productsInsideCart = document.getElementById("products-inside-cart");
const totalCount = document.querySelector(".Total-items-span");




filter.addEventListener( 'click', function()
{
    if(filter.innerHTML === "Hide Filters")
    {
        filter.innerHTML = "Show Filters";
        container6.style.width = "100%";
        container6.style.right = "0%";
        container5.style.display = "none";
        productimg.style.justifyContent="center";
        itemcounter.style.width = "40%"
        
        
    }
    else
    {
        filter.innerHTML = "Hide Filters";
        container6.style.width = "75%";
        container5.style.display = "block";
        container6.style.right = "3%";
        
    }
    
})

function initializeFilter() {
    // Simulate a click on the "All" button
    document.querySelector('.filter-buttons').classList.add("active");
    filterProduct('all');
}




fetch('./data_json.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(items => {

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container", items.category.toLowerCase().replace(/\s+/g, '-'), "hide");

            

            const colorClasses = items.colorCode.split(',').map(color => color.trim().toLowerCase().replace(/\s+/g, ''));
            colorClasses.forEach(color => itemContainer.classList.add(color))

            const gender = items.gender.split(',').map(gender => gender.trim().toLowerCase().replace(/\s+/g, ''));
            gender.forEach(gender => itemContainer.classList.add(gender))

            const newImg = document.createElement("img");
            newImg.src = items.image;
            newImg.classList.add("new-image")

            const nameElement = document.createElement("p");
            nameElement.textContent = items.name;

            const description = document.createElement("span");
            description.textContent = items.discription;
            description.classList.add("description");

            const category = document.createElement("span");
            category.textContent = items.category;

            const colorElement = document.createElement("p");
            colorElement.textContent = items.colors;
            colorElement.classList.add("color-element");
            

            const priceElement = document.createElement("h4");
           
            priceElement.textContent = "$"+" "+ items.price;
            
            priceElement.classList.add("price-element")

            const buttonAddToCart = document.createElement("div");
            buttonAddToCart.innerHTML = `
                <button class="button-add-to-cart" data-img = "${items.image}" data-id="${items.id}" data-name="${items.name}" data-price="${items.price}" data-description="${items.discription}">Add to Cart</button>
            `;

            
            
            buttonAddToCart.querySelector('button').addEventListener('click', function(e) {
                const itemId = e.target.getAttribute('data-id');
                const itemName = e.target.getAttribute('data-name');
                const itemPrice = e.target.getAttribute('data-price');
                const itemDescription = e.target.getAttribute('data-description');
                const itemImage = e.target.getAttribute('data-img');
            
                // Get cart from localStorage or initialize it as an empty array
                const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                
                const counterValue = cartItems.length;
                itemcounter.textContent = counterValue +1;
                localStorage.setItem('itemcounter', counterValue)
                
            
               
            
                // Check if the item already exists in the cart
                const itemExists = cartItems.find(item => item.id === itemId);
            
                // If the item is not already in the cart, add it
                if (!itemExists) {
                    cartItems.push({
                        id: itemId,
                        name: itemName,
                        price: itemPrice, // Ensure it's a number
                        description: itemDescription,
                        image: itemImage
                    });
                    localStorage.setItem('cart', JSON.stringify(cartItems));
                   
                } else {
                    alert("Item is already in the cart!");
                }
            });
            
            
            
            itemContainer.appendChild(newImg);
            itemContainer.appendChild(nameElement);
            itemContainer.appendChild(description);
            itemContainer.appendChild(colorElement);
            
            itemContainer.appendChild(priceElement);
            itemContainer.appendChild(buttonAddToCart);
            

            productimg.insertAdjacentElement('beforeend', itemContainer);

            window.onload = function () {
                const savedCounter = localStorage.getItem('itemcounter');
                if (savedCounter) {
                    itemcounter.textContent = savedCounter;
                } else {
                    itemcounter.textContent = '0'; // Default value if no items in cart
                }
            };

        });
        initializeFilter();

        const filterButtons = document.querySelectorAll(".filter-buttons .button-value");
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.innerText.toLowerCase();
                filterProduct(value);
                button.classList.add("active");
            });
        });
    });

// Filter function
function filterProduct(value) {
    const elements = document.querySelectorAll(".item-container");
    elements.forEach(element => {
        if (value === "all") {
            element.classList.remove("hide");
        } else if (element.classList.contains(value)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}


    document.addEventListener("DOMContentLoaded", () => {
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    const priceMinDisplay = document.getElementById("price-min-display");
    const priceMaxDisplay = document.getElementById("price-max-display");

    // Update displayed price values
    priceMin.addEventListener("input", () => {
        if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
            priceMin.value = priceMax.value; // Prevent overlap
        }
        priceMinDisplay.textContent = priceMin.value;
        filterByPrice();
    });

    priceMax.addEventListener("input", () => {
        if (parseInt(priceMax.value) < parseInt(priceMin.value)) {
            priceMax.value = priceMin.value; // Prevent overlap
        }
        priceMaxDisplay.textContent = priceMax.value;
        filterByPrice();
    });

    // Filter products based on price range
    function filterByPrice() {
        const minPrice = parseInt(priceMin.value);
        const maxPrice = parseInt(priceMax.value);

        const elements = document.querySelectorAll(".item-container");
        elements.forEach(element => {
            const priceElement = element.querySelector(".price-element");
            const price = parseFloat(priceElement.textContent.replace("$", ""));

            // Show or hide elements based on price
            if (price >= minPrice && price <= maxPrice) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        });
    }
});



    

    
    
