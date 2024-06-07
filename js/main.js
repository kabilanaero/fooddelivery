document.addEventListener("DOMContentLoaded", () => {
     if (document.querySelector("#hotels")) {
        loadHotels();
    } else if (document.querySelector("#menu")) {
        const urlParams = new URLSearchParams(window.location.search);
        const hotelId = urlParams.get('id');
        loadMenu(hotelId);
    } else if (document.querySelector("#order-summary")) {
        loadOrderSummary();
    }
});

function loadHotels() {
    const hotelsContainer = document.getElementById("hotels");
    hotels.forEach(hotel => {
        const hotelDiv = document.createElement("div");
        hotelDiv.className = "hotel";
        hotelDiv.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <h2>${hotel.name}</h2>
            <a href="restaurant.html?id=${hotel.id}">View Menu</a>
        `;
        hotelsContainer.appendChild(hotelDiv);
    });
}

function loadMenu(hotelId) {
    const menuContainer = document.getElementById("menu");
    const hotel = hotels.find(h => h.id == hotelId);
    document.getElementById("restaurant-name").innerText = hotel.name;
    hotel.menu.forEach(item => {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.className = "menu-item";
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}"> 
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <input type="number" id="quantity-${item.id}" value="1" min="1" max="10">
            <button onclick="handleAddToCart(${hotelId}, ${item.id})">Add to cart</button>
        `;
        menuContainer.appendChild(menuItemDiv);
    });
}

// Function to handle adding an item to the cart
function handleAddToCart(hotelId, itemId) {
    if (!isUserLoggedIn()) {
        // Redirect to login page if the user is not logged in
        window.location.href = 'login.html';
        return;
    }
    addToCart(hotelId, itemId);
}

// Function to check if user is logged in
function isUserLoggedIn() {
    // Replace this with your actual logic to check if the user is logged in
    // For demonstration, let's assume we have a function called getUser that returns null if not logged in
    return getUser() !== null;
}

// Dummy function to get the current user (replace with your actual logic)
function getUser() {
    // For example, you might check for a token in localStorage or a cookie
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}

// Function to add an item to the cart
function addToCart(hotelId, itemId) {
    const hotel = hotels.find(h => h.id == hotelId);
    const item = hotel.menu.find(i => i.id == itemId);
    const quantity = parseInt(document.getElementById(`quantity-${item.id}`).value);

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemIndex = cart.findIndex(i => i.itemId === itemId && i.hotelId === hotelId);

    if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity += quantity;
    } else {
        cart.push({ hotelId, itemId, name: item.name, price: item.price, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} has been added to the cart.`);
}

// Function to display cart items
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items in cart.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <p>${item.name} (Hotel ID: ${item.hotelId}) - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}</p>
            `;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
}

// Call the function to display cart items when the page loads
document.addEventListener('DOMContentLoaded', showCart);

// Function for search bar


// ------ location ------
document.addEventListener('DOMContentLoaded', () => {
    const getLocationBtn = document.getElementById('getLocationBtn');
    const mapDiv = document.getElementById('map');
    const restaurantsDiv = document.getElementById('restaurants');
    let map;

    getLocationBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        } else {
            restaurantsDiv.textContent = "Geolocation is not supported by this browser.";
        }
    });

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const userLocation = { lat: latitude, lng: longitude };

        // Initialize Google Map centered at user's location
        map = new google.maps.Map(mapDiv, {
            center: userLocation,
            zoom: 15
        });

        // Display a marker at user's location
        const userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Your Location"
        });

        // Search for nearby hotels using Places API
        const placesService = new google.maps.places.PlacesService(map);
        placesService.nearbySearch({
            location: userLocation,
            radius: 500, // Adjust as needed
            type: 'lodging'
        }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                displayHotels(results);
            } else {
                restaurantsDiv.textContent = "No nearby hotels found.";
            }
        });
    }

    function displayHotels(hotels) {
        restaurantsDiv.innerHTML = "";
        hotels.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.textContent = `${hotel.name} - ${hotel.vicinity}`;
            restaurantsDiv.appendChild(hotelDiv);
        });
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                restaurantsDiv.textContent = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                restaurantsDiv.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                restaurantsDiv.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                restaurantsDiv.textContent = "An unknown error occurred.";
                break;
        }
    }
});

// -------- Add to cart -------
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Sample items in the cart (you can replace this with actual data)
    const itemsInCart = [
        { name: 'Pizza', price: 12.99 },
        { name: 'Burger', price: 8.99 },
        { name: 'Salad', price: 6.49 }
    ];

    // Display items in the cart
    displayCartItems(itemsInCart);

    // Calculate and display total price
    const total = itemsInCart.reduce((acc, item) => acc + item.price, 0);
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    checkoutBtn.addEventListener('click', () => {
        // Redirect to checkout page or perform other actions
        console.log("Proceeding to checkout...");
    });

    function displayCartItems(items) {
        cartItems.innerHTML = "";
        items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);
        });
    }
});

// welcome message

document.addEventListener('DOMContentLoaded', () => {
            const welcomeMessage = document.getElementById('welcome-message');

            // Check if the user is already logged in
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                showWelcomeMessage(user.username);
            } else {
                // Redirect to login page if not logged in
                window.location.href = 'login.html';
            }

            function showWelcomeMessage(username) {
                welcomeMessage.textContent = `Welcome, ${username}!`;
                welcomeMessage.classList.add('show');

                // Hide the message after 3 seconds
                setTimeout(() => {
                    welcomeMessage.classList.add('fade-out');
                    // Remove the message from the DOM after the fade-out transition
                    setTimeout(() => {
                        welcomeMessage.style.display = 'none';
                    }, 2000); // Match the transition duration
                }, 3000); // Show for 3 seconds
            }
        });
