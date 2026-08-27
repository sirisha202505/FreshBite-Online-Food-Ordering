/* ============================================
   FRESHBITE - ONLINE FOOD ORDERING
   JAVASCRIPT
============================================ */


/* ============================================
   FOOD DATA - 30 ITEMS
============================================ */

const foodItems = [

    /* ==================== PIZZA ==================== */

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
        name: "Farmhouse Pizza",
        price: 349,
        category: "Pizza",
        dietary: "veg",
        description: "Loaded with onion, capsicum, tomato and cheese."
    },
    {
        id: 3,
        name: "Paneer Tikka Pizza",
        price: 379,
        category: "Pizza",
        dietary: "veg",
        description: "Spicy paneer tikka with mozzarella and herbs."
    },
    {
        id: 4,
        name: "Chicken Tikka Pizza",
        price: 429,
        category: "Pizza",
        dietary: "nonveg",
        description: "Tender chicken tikka with cheese and vegetables."
    },
    {
        id: 5,
        name: "Pepperoni Pizza",
        price: 449,
        category: "Pizza",
        dietary: "nonveg",
        description: "Classic pepperoni with mozzarella cheese."
    },


    /* ==================== BURGERS ==================== */

    {
        id: 6,
        name: "Veg Burger",
        price: 149,
        category: "Burgers",
        dietary: "veg",
        description: "Crispy vegetable patty with fresh lettuce."
    },
    {
        id: 7,
        name: "Chicken Burger",
        price: 199,
        category: "Burgers",
        dietary: "nonveg",
        description: "Juicy chicken patty with fresh vegetables."
    },
    {
        id: 8,
        name: "Cheese Burger",
        price: 229,
        category: "Burgers",
        dietary: "veg",
        description: "Classic burger with a delicious cheese slice."
    },
    {
        id: 9,
        name: "Paneer Burger",
        price: 219,
        category: "Burgers",
        dietary: "veg",
        description: "Crispy paneer patty with spicy sauce."
    },
    {
        id: 10,
        name: "Double Chicken Burger",
        price: 299,
        category: "Burgers",
        dietary: "nonveg",
        description: "Double chicken patties with cheese and sauces."
    },


    /* ==================== PASTA ==================== */

    {
        id: 11,
        name: "White Sauce Pasta",
        price: 249,
        category: "Pasta",
        dietary: "veg",
        description: "Creamy pasta with herbs and vegetables."
    },
    {
        id: 12,
        name: "Red Sauce Pasta",
        price: 229,
        category: "Pasta",
        dietary: "veg",
        description: "Pasta cooked in rich tomato sauce."
    },
    {
        id: 13,
        name: "Arrabbiata Pasta",
        price: 259,
        category: "Pasta",
        dietary: "veg",
        description: "Spicy tomato pasta with Italian herbs."
    },
    {
        id: 14,
        name: "Chicken Alfredo Pasta",
        price: 329,
        category: "Pasta",
        dietary: "nonveg",
        description: "Creamy Alfredo pasta with tender chicken."
    },
    {
        id: 15,
        name: "Cheesy Macaroni",
        price: 279,
        category: "Pasta",
        dietary: "veg",
        description: "Creamy macaroni loaded with melted cheese."
    },


    /* ==================== INDIAN ==================== */

    {
        id: 16,
        name: "Chicken Biryani",
        price: 299,
        category: "Indian",
        dietary: "nonveg",
        description: "Aromatic basmati rice with spicy chicken."
    },
    {
        id: 17,
        name: "Veg Biryani",
        price: 249,
        category: "Indian",
        dietary: "veg",
        description: "Fragrant rice cooked with fresh vegetables."
    },
    {
        id: 18,
        name: "Paneer Butter Masala",
        price: 279,
        category: "Indian",
        dietary: "veg",
        description: "Soft paneer in a rich creamy tomato gravy."
    },
    {
        id: 19,
        name: "Butter Chicken",
        price: 349,
        category: "Indian",
        dietary: "nonveg",
        description: "Tender chicken cooked in creamy butter gravy."
    },
    {
        id: 20,
        name: "Masala Dosa",
        price: 129,
        category: "Indian",
        dietary: "veg",
        description: "Crispy dosa served with potato masala."
    },


    /* ==================== HEALTHY ==================== */

    {
        id: 21,
        name: "Fresh Veg Salad",
        price: 179,
        category: "Healthy",
        dietary: "vegan",
        description: "Healthy vegetables with fresh dressing."
    },
    {
        id: 22,
        name: "Fruit Bowl",
        price: 199,
        category: "Healthy",
        dietary: "vegan",
        description: "Fresh seasonal fruits served in a healthy bowl."
    },
    {
        id: 23,
        name: "Greek Salad",
        price: 229,
        category: "Healthy",
        dietary: "veg",
        description: "Fresh vegetables, olives and feta cheese."
    },
    {
        id: 24,
        name: "Grilled Chicken Salad",
        price: 279,
        category: "Healthy",
        dietary: "nonveg",
        description: "Grilled chicken with fresh vegetables and greens."
    },
    {
        id: 25,
        name: "Veg Sandwich",
        price: 159,
        category: "Healthy",
        dietary: "veg",
        description: "Fresh vegetables layered inside toasted bread."
    },


    /* ==================== DESSERTS ==================== */

    {
        id: 26,
        name: "Chocolate Cake",
        price: 149,
        category: "Desserts",
        dietary: "veg",
        description: "Soft chocolate cake with creamy frosting."
    },
    {
        id: 27,
        name: "Red Velvet Cake",
        price: 179,
        category: "Desserts",
        dietary: "veg",
        description: "Soft red velvet cake with cream cheese frosting."
    },
    {
        id: 28,
        name: "Chocolate Brownie",
        price: 129,
        category: "Desserts",
        dietary: "veg",
        description: "Warm and fudgy chocolate brownie."
    },
    {
        id: 29,
        name: "Vanilla Ice Cream",
        price: 99,
        category: "Desserts",
        dietary: "veg",
        description: "Classic creamy vanilla ice cream."
    },
    {
        id: 30,
        name: "Gulab Jamun",
        price: 119,
        category: "Desserts",
        dietary: "veg",
        description: "Soft gulab jamun served with sweet syrup."
    }
];


/* ============================================
   CART DATA
============================================ */

let cart =
    JSON.parse(localStorage.getItem("freshBiteCart")) || [];


/* ============================================
   SAVE CART
============================================ */

function saveCart() {

    localStorage.setItem(
        "freshBiteCart",
        JSON.stringify(cart)
    );
}


/* ============================================
   ADD TO CART
============================================ */

function addToCart(itemId) {

    const item =
        foodItems.find(food => food.id === itemId);

    if (!item) {
        return;
    }

    const existingItem =
        cart.find(cartItem => cartItem.id === itemId);

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

    saveCart();

    updateCart();

    alert(
        item.name +
        " added to cart!"
    );
}


/* ============================================
   UPDATE CART
============================================ */

function updateCart() {

    const cartContainer =
        document.getElementById("cart-container");

    const cartTotal =
        document.getElementById("cart-total");

    updateCartCount();

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

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>

            </div>

            <div class="quantity-controls">

                <button
                    type="button"
                    onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    type="button"
                    onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>

            <strong class="cart-item-total">
                ₹${itemTotal}
            </strong>

            <button
                type="button"
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
   CART COUNT
============================================ */

function updateCartCount() {

    const cartCounts =
        document.querySelectorAll(".cart-count");

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    cartCounts.forEach(count => {

        count.textContent = totalQuantity;

    });
}


/* ============================================
   INCREASE QUANTITY
============================================ */

function increaseQuantity(itemId) {

    const item =
        cart.find(
            cartItem => cartItem.id === itemId
        );

    if (item) {

        item.quantity++;

        saveCart();

        updateCart();
    }
}


/* ============================================
   DECREASE QUANTITY
============================================ */

function decreaseQuantity(itemId) {

    const item =
        cart.find(
            cartItem => cartItem.id === itemId
        );

    if (!item) {
        return;
    }

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(
                cartItem => cartItem.id !== itemId
            );
    }

    saveCart();

    updateCart();
}


/* ============================================
   REMOVE FROM CART
============================================ */

function removeFromCart(itemId) {

    const item =
        cart.find(
            cartItem => cartItem.id === itemId
        );

    cart =
        cart.filter(
            cartItem => cartItem.id !== itemId
        );

    saveCart();

    updateCart();

    if (item) {

        alert(
            item.name +
            " removed from cart."
        );
    }
}


/* ============================================
   FOOD CATEGORY FILTER
============================================ */

function filterFood(category, event) {

    const foodCards =
        document.querySelectorAll(".food-card");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.classList.remove("active");

    });

    if (event && event.currentTarget) {

        event.currentTarget.classList.add("active");

    }

    foodCards.forEach(card => {

        const cardCategory =
            card.dataset.category;

        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }
    });
}


/* ============================================
   FOOD SEARCH
============================================ */

function searchFood() {

    const searchInput =
        document.getElementById("search-input");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    const foodCards =
        document.querySelectorAll(".food-card");

    foodCards.forEach(card => {

        const foodName =
            card
                .querySelector("h3")
                ?.textContent
                .toLowerCase() || "";

        const foodCategory =
            card.dataset.category
                ?.toLowerCase() || "";

        if (
            foodName.includes(searchText) ||
            foodCategory.includes(searchText)
        ) {

            card.style.display = "";

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

        alert(
            "Your cart is empty. Please add food items first."
        );

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

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (cart.length === 0) {

                alert(
                    "Please add items to your cart first."
                );

                return;
            }

            const customerName =
                document
                    .getElementById("customer-name")
                    .value
                    .trim();

            const customerEmail =
                document
                    .getElementById("customer-email")
                    .value
                    .trim();

            const customerPhone =
                document
                    .getElementById("customer-phone")
                    .value
                    .trim();

            const customerAddress =
                document
                    .getElementById("customer-address")
                    .value
                    .trim();

            const deliveryTime =
                document
                    .getElementById("delivery-time")
                    .value;

            const paymentMethod =
                document
                    .getElementById("payment-method")
                    .value;

            if (
                !customerName ||
                !customerEmail ||
                !customerPhone ||
                !customerAddress ||
                !deliveryTime ||
                !paymentMethod
            ) {

                alert(
                    "Please complete all checkout details."
                );

                return;
            }

            let paymentMessage = "";

            if (paymentMethod === "upi") {

                paymentMessage =
                    "UPI payment simulation successful.";

            } else if (paymentMethod === "card") {

                paymentMessage =
                    "Card payment simulation successful.";

            } else {

                paymentMessage =
                    "Cash on Delivery selected.";
            }

            alert(
                "Order placed successfully!\n\n" +
                "Thank you, " +
                customerName +
                "!\n\n" +
                "Delivery: " +
                deliveryTime +
                "\n" +
                "Payment: " +
                paymentMessage
            );

            cart = [];

            saveCart();

            updateCart();

            checkoutForm.reset();

            const tracking =
                document.getElementById("order-tracking");

            if (tracking) {

                tracking.scrollIntoView({
                    behavior: "smooth"
                });

                startOrderTracking();
            }
        }
    );
}


/* ============================================
   LOGIN
============================================ */

const loginForm =
    document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                document
                    .getElementById("login-email")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("login-password")
                    .value
                    .trim();

            if (!email || !password) {

                alert(
                    "Please enter email and password."
                );

                return;
            }

            alert(
                "Login successful!\n\n" +
                "Welcome to FreshBite."
            );

            loginForm.reset();
        }
    );
}


/* ============================================
   REGISTER
============================================ */

const registerForm =
    document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document
                    .getElementById("register-name")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("register-email")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("register-password")
                    .value
                    .trim();

            if (!name || !email || !password) {

                alert(
                    "Please fill all registration details."
                );

                return;
            }

            alert(
                "Account created successfully!\n\n" +
                "Welcome, " +
                name +
                "!"
            );

            registerForm.reset();
        }
    );
}


/* ============================================
   CONTACT FORM
============================================ */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for contacting FreshBite!\n\n" +
                "We will get back to you soon."
            );

            contactForm.reset();
        }
    );
}


/* ============================================
   RESTAURANT BUTTONS
============================================ */

const restaurantButtons =
    document.querySelectorAll(".restaurant-btn");

restaurantButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const restaurantName =
                button.dataset.restaurant ||
                button.textContent.trim();

            showRestaurantMenu(restaurantName);

        }
    );
});


/* ============================================
   RESTAURANT FILTERS
============================================ */

function filterRestaurants() {

    const cuisineFilter =
        document.getElementById("cuisine-filter");

    const ratingFilter =
        document.getElementById("rating-filter");

    const priceFilter =
        document.getElementById("price-filter");

    const restaurants =
        document.querySelectorAll(".restaurant-card");

    const noResults =
        document.getElementById(
            "no-restaurant-message"
        );

    if (
        !cuisineFilter ||
        !ratingFilter ||
        !priceFilter
    ) {
        return;
    }

    const selectedCuisine =
        cuisineFilter.value;

    const selectedRating =
        ratingFilter.value;

    const selectedPrice =
        priceFilter.value;

    let visibleRestaurants = 0;

    restaurants.forEach(function (restaurant) {

        const restaurantCuisine =
            restaurant.dataset.cuisine;

        const restaurantRating =
            parseFloat(
                restaurant.dataset.rating
            );

        const restaurantPrice =
            restaurant.dataset.price;


        const cuisineMatch =
            selectedCuisine === "all" ||
            restaurantCuisine === selectedCuisine;


        const ratingMatch =
            selectedRating === "all" ||
            restaurantRating >=
            parseFloat(selectedRating);


        const priceMatch =
            selectedPrice === "all" ||
            restaurantPrice === selectedPrice;


        if (
            cuisineMatch &&
            ratingMatch &&
            priceMatch
        ) {

            restaurant.style.display = "";

            visibleRestaurants++;

        } else {

            restaurant.style.display = "none";
        }
    });


    if (noResults) {

        if (visibleRestaurants === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";
        }
    }
}


/* ============================================
   RESET RESTAURANT FILTERS
============================================ */

function resetRestaurantFilters() {

    const cuisineFilter =
        document.getElementById("cuisine-filter");

    const ratingFilter =
        document.getElementById("rating-filter");

    const priceFilter =
        document.getElementById("price-filter");

    if (cuisineFilter) {

        cuisineFilter.value = "all";
    }

    if (ratingFilter) {

        ratingFilter.value = "all";
    }

    if (priceFilter) {

        priceFilter.value = "all";
    }

    filterRestaurants();
}


/* ============================================
   SHOW RESTAURANT MENU
============================================ */

function showRestaurantMenu(restaurantName) {

    alert(
        restaurantName +
        " selected! Showing available menu items."
    );

    const menuSection =
        document.getElementById("menu");

    if (menuSection) {

        menuSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* ============================================
   ORDER TRACKING
============================================ */

function startOrderTracking() {

    const trackingSteps =
        document.querySelectorAll(
            ".tracking-step"
        );

    if (trackingSteps.length === 0) {
        return;
    }

    trackingSteps.forEach((step, index) => {

        if (index === 0) {

            step.classList.add("active");

        } else {

            step.classList.remove("active");
        }
    });

    let currentStep = 1;

    const interval =
        setInterval(function () {

            if (
                currentStep >=
                trackingSteps.length
            ) {

                clearInterval(interval);

                return;
            }

            trackingSteps[currentStep]
                .classList.add("active");

            currentStep++;

            if (
                currentStep >=
                trackingSteps.length
            ) {

                clearInterval(interval);
            }

        }, 3000);
}


/* ============================================
   INITIAL CART DISPLAY
============================================ */

updateCart();
