/* ============================================
   FRESHBITE - ONLINE FOOD ORDERING
   JAVASCRIPT
============================================ */


/* ============================================
   FOOD DATA
============================================ */

const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 299,
        category: "Pizza",
        dietary: "veg",
        description: "Fresh tomato, mozzarella cheese and basil."
    },
    {
        id: 2,
        name: "Chicken Burger",
        price: 199,
        category: "Burgers",
        dietary: "nonveg",
        description: "Juicy chicken patty with fresh vegetables."
    },
    {
        id: 3,
        name: "White Sauce Pasta",
        price: 249,
        category: "Pasta",
        dietary: "veg",
        description: "Creamy pasta with herbs and vegetables."
    },
    {
        id: 4,
        name: "Chicken Biryani",
        price: 299,
        category: "Indian",
        dietary: "nonveg",
        description: "Aromatic basmati rice with spicy chicken."
    },
    {
        id: 5,
        name: "Fresh Veg Salad",
        price: 179,
        category: "Healthy",
        dietary: "vegan",
        description: "Healthy vegetables with fresh dressing."
    },
    {
        id: 6,
        name: "Chocolate Cake",
        price: 149,
        category: "Desserts",
        dietary: "veg",
        description: "Soft chocolate cake with creamy frosting."
    }
];


/* ============================================
   CART DATA
============================================ */

let cart = [];


/* ============================================
   ADD TO CART
============================================ */

function addToCart(itemId) {

    const item = foodItems.find(food => food.id === itemId);

    if (!item) {
        return;
    }

    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });

    }

    updateCart();

    alert(item.name + " added to cart!");
}


/* ============================================
   UPDATE CART
============================================ */

function updateCart() {

    const cartContainer = document.getElementById("cart-container");
    const cartTotal = document.getElementById("cart-total");

    if (!cartContainer || !cartTotal) {
        return;
    }

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;


    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price} × ${item.quantity}</p>
            </div>

            <div class="quantity-controls">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>

            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})">
                Remove
            </button>
        `;

        cartContainer.appendChild(cartItem);

    });


    cartTotal.textContent = total;
}


/* ============================================
   INCREASE QUANTITY
============================================ */

function increaseQuantity(itemId) {

    const item = cart.find(cartItem => cartItem.id === itemId);

    if (item) {

        item.quantity++;

        updateCart();
    }
}


/* ============================================
   DECREASE QUANTITY
============================================ */

function decreaseQuantity(itemId) {

    const item = cart.find(cartItem => cartItem.id === itemId);

    if (!item) {
        return;
    }

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart = cart.filter(cartItem => cartItem.id !== itemId);

    }

    updateCart();
}


/* ============================================
   REMOVE FROM CART
============================================ */

function removeFromCart(itemId) {

    cart = cart.filter(item => item.id !== itemId);

    updateCart();
}


/* ============================================
   FOOD FILTER
============================================ */

function filterFood(category) {

    const foodCards = document.querySelectorAll(".food-card");
    const filterButtons = document.querySelectorAll(".filter-btn");


    filterButtons.forEach(button => {

        button.classList.remove("active");

    });


    if (event && event.target) {

        event.target.classList.add("active");

    }


    foodCards.forEach(card => {

        const cardCategory = card.dataset.category;


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


/* ============================================
   CHECKOUT
============================================ */

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add food items first.");

        return;
    }

    const checkoutSection =
        document.getElementById("checkout");

    if (checkoutSection) {

        checkoutSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ============================================
   CHECKOUT FORM
============================================ */

const checkoutForm =
    document.getElementById("checkout-form");


if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert("Please add items to your cart first.");

            return;
        }


        const customerName =
            document.getElementById("customer-name").value;

        const paymentMethod =
            document.getElementById("payment-method").value;

        const deliveryTime =
            document.getElementById("delivery-time").value;


        if (!customerName ||
            !paymentMethod ||
            !deliveryTime) {

            alert("Please complete all checkout details.");

            return;
        }


        alert(
            "Order placed successfully!\n\n" +
            "Thank you, " +
            customerName +
            "!"
        );


        cart = [];

        updateCart();

        checkoutForm.reset();


        const tracking =
            document.getElementById("order-tracking");

        if (tracking) {

            tracking.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* ============================================
   LOGIN
============================================ */

const loginForm =
    document.getElementById("login-form");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("login-email").value;

        const password =
            document.getElementById("login-password").value;


        if (!email || !password) {

            alert("Please enter email and password.");

            return;
        }


        alert(
            "Login successful!\n\nWelcome to FreshBite."
        );

        loginForm.reset();

    });

}


/* ============================================
   REGISTER
============================================ */

const registerForm =
    document.getElementById("register-form");


if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("register-name").value;

        const email =
            document.getElementById("register-email").value;

        const password =
            document.getElementById("register-password").value;


        if (!name || !email || !password) {

            alert("Please fill all registration details.");

            return;
        }


        alert(
            "Account created successfully!\n\n" +
            "Welcome, " +
            name +
            "!"
        );


        registerForm.reset();

    });

}


/* ============================================
   CONTACT FORM
============================================ */

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        alert(
            "Thank you for contacting FreshBite!\n\n" +
            "We will get back to you soon."
        );


        contactForm.reset();

    });

}


/* ============================================
   RESTAURANT VIEW MENU
============================================ */

const restaurantButtons =
    document.querySelectorAll(".restaurant-btn");


restaurantButtons.forEach(button => {

    button.addEventListener("click", function() {

        const menuSection =
            document.getElementById("menu");

        if (menuSection) {

            menuSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ============================================
   ORDER TRACKING SIMULATION
============================================ */

function startOrderTracking() {

    const trackingSteps =
        document.querySelectorAll(".tracking-step");


    let currentStep = 0;


    function activateNextStep() {

        if (currentStep >= trackingSteps.length) {
            return;
        }


        trackingSteps[currentStep]
            .classList.add("active");


        currentStep++;

    }


    activateNextStep();


    const interval =
        setInterval(function() {

            activateNextStep();


            if (currentStep >= trackingSteps.length) {

                clearInterval(interval);

            }

        }, 3000);

}


/* ============================================
   INITIAL CART DISPLAY
============================================ */

updateCart();
