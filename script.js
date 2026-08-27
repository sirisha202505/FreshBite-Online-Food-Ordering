/* ============================================
   FRESHBITE - ONLINE FOOD ORDERING
   JAVASCRIPT
============================================ */


/* ============================================
   FOOD DATA - 36 ITEMS
============================================ */

const foodItems = [

    /* ---------- PIZZA ---------- */

    {
        id: 1,
        name: "Margherita Pizza",
        price: 299,
        category: "Pizza",
        dietary: "veg",
        emoji: "🍕",
        description: "Fresh tomato, mozzarella cheese and basil."
    },

    {
        id: 2,
        name: "Farmhouse Pizza",
        price: 349,
        category: "Pizza",
        dietary: "veg",
        emoji: "🍕",
        description: "Loaded with fresh vegetables and mozzarella."
    },

    {
        id: 3,
        name: "Paneer Tikka Pizza",
        price: 379,
        category: "Pizza",
        dietary: "veg",
        emoji: "🍕",
        description: "Spicy paneer tikka with onions and capsicum."
    },

    {
        id: 4,
        name: "Corn Pizza",
        price: 329,
        category: "Pizza",
        dietary: "veg",
        emoji: "🌽",
        description: "Sweet corn, cheese and fresh vegetables."
    },

    {
        id: 5,
        name: "Chicken Pizza",
        price: 429,
        category: "Pizza",
        dietary: "nonveg",
        emoji: "🍗",
        description: "Tender chicken pieces with mozzarella cheese."
    },

    {
        id: 6,
        name: "BBQ Chicken Pizza",
        price: 449,
        category: "Pizza",
        dietary: "nonveg",
        emoji: "🍕",
        description: "Smoky BBQ chicken with melted cheese."
    },


    /* ---------- BURGERS ---------- */

    {
        id: 7,
        name: "Veggie Burger",
        price: 179,
        category: "Burgers",
        dietary: "veg",
        emoji: "🍔",
        description: "Crispy vegetable patty with fresh lettuce."
    },

    {
        id: 8,
        name: "Chicken Burger",
        price: 199,
        category: "Burgers",
        dietary: "nonveg",
        emoji: "🍔",
        description: "Juicy chicken patty with fresh vegetables."
    },

    {
        id: 9,
        name: "Cheese Burger",
        price: 229,
        category: "Burgers",
        dietary: "veg",
        emoji: "🍔",
        description: "Classic burger with delicious melted cheese."
    },

    {
        id: 10,
        name: "Chicken Wings Burger",
        price: 299,
        category: "Burgers",
        dietary: "nonveg",
        emoji: "🍗",
        description: "Crispy chicken wings with burger and special sauce."
    },

    {
        id: 11,
        name: "Paneer Burger",
        price: 249,
        category: "Burgers",
        dietary: "veg",
        emoji: "🍔",
        description: "Spicy paneer patty with fresh vegetables."
    },

    {
        id: 12,
        name: "Double Chicken Burger",
        price: 329,
        category: "Burgers",
        dietary: "nonveg",
        emoji: "🍔",
        description: "Double chicken patties with creamy sauce."
    },


    /* ---------- PASTA ---------- */

    {
        id: 13,
        name: "White Sauce Pasta",
        price: 249,
        category: "Pasta",
        dietary: "veg",
        emoji: "🍝",
        description: "Creamy pasta with herbs and vegetables."
    },

    {
        id: 14,
        name: "Red Sauce Pasta",
        price: 229,
        category: "Pasta",
        dietary: "vegan",
        emoji: "🍝",
        description: "Italian pasta with fresh tomato sauce."
    },

    {
        id: 15,
        name: "Pesto Pasta",
        price: 279,
        category: "Pasta",
        dietary: "veg",
        emoji: "🍝",
        description: "Pasta tossed with fresh basil pesto."
    },

    {
        id: 16,
        name: "Chicken Pasta",
        price: 319,
        category: "Pasta",
        dietary: "nonveg",
        emoji: "🍗",
        description: "Creamy pasta with grilled chicken pieces."
    },

    {
        id: 17,
        name: "Cheesy Pasta",
        price: 289,
        category: "Pasta",
        dietary: "veg",
        emoji: "🧀",
        description: "Delicious pasta loaded with melted cheese."
    },

    {
        id: 18,
        name: "Arrabbiata Pasta",
        price: 259,
        category: "Pasta",
        dietary: "vegan",
        emoji: "🍝",
        description: "Spicy tomato pasta with garlic and herbs."
    },


    /* ---------- INDIAN ---------- */

    {
        id: 19,
        name: "Chicken Biryani",
        price: 299,
        category: "Indian",
        dietary: "nonveg",
        emoji: "🍛",
        description: "Aromatic basmati rice with spicy chicken."
    },

    {
        id: 20,
        name: "Veg Biryani",
        price: 249,
        category: "Indian",
        dietary: "veg",
        emoji: "🍛",
        description: "Fragrant rice cooked with fresh vegetables."
    },

    {
        id: 21,
        name: "Paneer Butter Masala",
        price: 279,
        category: "Indian",
        dietary: "veg",
        emoji: "🍛",
        description: "Soft paneer cooked in creamy tomato gravy."
    },

    {
        id: 22,
        name: "Chicken Tikka",
        price: 329,
        category: "Indian",
        dietary: "nonveg",
        emoji: "🍗",
        description: "Juicy chicken pieces grilled with Indian spices."
    },

    {
        id: 23,
        name: "Mutton Biryani",
        price: 399,
        category: "Indian",
        dietary: "nonveg",
        emoji: "🍖",
        description: "Flavourful basmati rice cooked with tender mutton."
    },

    {
        id: 24,
        name: "Dal Tadka",
        price: 199,
        category: "Indian",
        dietary: "vegan",
        emoji: "🍛",
        description: "Yellow lentils tempered with aromatic spices."
    },


    /* ---------- HEALTHY ---------- */

    {
        id: 25,
        name: "Fresh Veg Salad",
        price: 179,
        category: "Healthy",
        dietary: "vegan",
        emoji: "🥗",
        description: "Healthy vegetables with fresh dressing."
    },

    {
        id: 26,
        name: "Fruit Bowl",
        price: 199,
        category: "Healthy",
        dietary: "vegan",
        emoji: "🍓",
        description: "Fresh seasonal fruits served in a healthy bowl."
    },

    {
        id: 27,
        name: "Greek Salad",
        price: 229,
        category: "Healthy",
        dietary: "veg",
        emoji: "🥗",
        description: "Fresh vegetables with olives and feta cheese."
    },

    {
        id: 28,
        name: "Avocado Toast",
        price: 249,
        category: "Healthy",
        dietary: "vegan",
        emoji: "🥑",
        description: "Creamy avocado served on toasted bread."
    },

    {
        id: 29,
        name: "Chicken Salad",
        price: 279,
        category: "Healthy",
        dietary: "nonveg",
        emoji: "🥗",
        description: "Fresh vegetables with grilled chicken."
    },

    {
        id: 30,
        name: "Veg Sandwich",
        price: 189,
        category: "Healthy",
        dietary: "veg",
        emoji: "🥪",
        description: "Fresh vegetables layered inside toasted bread."
    },


    /* ---------- DESSERTS ---------- */

    {
        id: 31,
        name: "Chocolate Cake",
        price: 149,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍰",
        description: "Soft chocolate cake with creamy frosting."
    },

    {
        id: 32,
        name: "Red Velvet Cake",
        price: 179,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍰",
        description: "Soft red velvet cake with cream cheese frosting."
    },

    {
        id: 33,
        name: "Chocolate Brownie",
        price: 129,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍫",
        description: "Rich and fudgy chocolate brownie."
    },

    {
        id: 34,
        name: "Vanilla Ice Cream",
        price: 119,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍨",
        description: "Creamy vanilla ice cream with smooth texture."
    },

    {
        id: 35,
        name: "Chocolate Ice Cream",
        price: 139,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍨",
        description: "Rich chocolate ice cream for chocolate lovers."
    },

    {
        id: 36,
        name: "Fruit Ice Cream",
        price: 159,
        category: "Desserts",
        dietary: "veg",
        emoji: "🍨",
        description: "Refreshing ice cream with delicious fruit flavours."
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
   DISPLAY FOOD ITEMS
============================================ */

function displayFoodItems(items = foodItems) {

    const foodContainer =
        document.getElementById("food-container");

    if (!foodContainer) {
        return;
    }

    foodContainer.innerHTML = "";


    items.forEach(function(item) {

        const foodCard =
            document.createElement("div");

        foodCard.className = "food-card";

        foodCard.dataset.category =
            item.dietary;


        let tagText = "";
        let tagClass = "";


        if (item.dietary === "veg") {

            tagText = "Veg";
            tagClass = "veg";

        } else if (item.dietary === "nonveg") {

            tagText = "Non-Veg";
            tagClass = "nonveg";

        } else {

            tagText = "Vegan";
            tagClass = "vegan";

        }


        foodCard.innerHTML = `

            <div class="food-image">
                ${item.emoji}
            </div>

            <div class="food-info">

                <span class="food-tag ${tagClass}">
                    ${tagText}
                </span>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

                <div class="food-bottom">

                    <span class="price">
                        ₹${item.price}
                    </span>

                    <button
                        class="add-btn"
                        type="button"
                        onclick="addToCart(${item.id})">

                        + Add

                    </button>

                </div>

            </div>

        `;


        foodContainer.appendChild(foodCard);

    });

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

        updateCartCount();

        return;
    }


    let total = 0;


    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h3>
                    ${item.name}
                </h3>

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

    updateCartCount();

}


/* ============================================
   CART COUNT
============================================ */

function updateCartCount() {

    const cartCounts =
        document.querySelectorAll(".cart-count");


    const totalQuantity =
        cart.reduce(
            function(total, item) {

                return total + item.quantity;

            },
            0
        );


    cartCounts.forEach(function(count) {

        count.textContent =
            totalQuantity;

    });

}


/* ============================================
   INCREASE QUANTITY
============================================ */

function increaseQuantity(itemId) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === itemId
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
            cartItem =>
                cartItem.id === itemId
        );


    if (!item) {
        return;
    }


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== itemId
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
            cartItem =>
                cartItem.id === itemId
        );


    cart =
        cart.filter(
            cartItem =>
                cartItem.id !== itemId
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
   FOOD FILTER
============================================ */

function filterFood(category, event) {

    const foodCards =
        document.querySelectorAll(".food-card");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    filterButtons.forEach(function(button) {

        button.classList.remove("active");

    });


    if (event && event.currentTarget) {

        event.currentTarget.classList.add("active");

    }


    foodCards.forEach(function(card) {

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
   CHECKOUT
============================================ */

function goToCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. " +
            "Please add food items first."
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
        function(event) {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Please add items " +
                    "to your cart first."
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
                    "Please complete " +
                    "all checkout details."
                );

                return;
            }


            let paymentMessage = "";


            if (paymentMethod === "upi") {

                paymentMessage =
                    "UPI payment simulation successful.";

            } else if (
                paymentMethod === "card"
            ) {

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
                document.getElementById(
                    "order-tracking"
                );


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
        function(event) {

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
                    "Please enter " +
                    "email and password."
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
        function(event) {

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
                    "Please fill all " +
                    "registration details."
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
        function(event) {

            event.preventDefault();


            alert(
                "Thank you for contacting " +
                "FreshBite!\n\n" +
                "We will get back to you soon."
            );


            contactForm.reset();

        }
    );

}


/* ============================================
   RESTAURANT VIEW MENU
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
   RESTAURANT FILTERS
============================================ */

function filterRestaurants() {

    const cuisineFilter =
        document.getElementById(
            "cuisine-filter"
        );

    const ratingFilter =
        document.getElementById(
            "rating-filter"
        );

    const priceFilter =
        document.getElementById(
            "price-filter"
        );


    const restaurants =
        document.querySelectorAll(
            ".restaurant-card"
        );


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


    let visibleCount = 0;


    restaurants.forEach(
        function(restaurant) {

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
                restaurantCuisine ===
                    selectedCuisine;


            const ratingMatch =
                selectedRating === "all" ||
                restaurantRating >=
                    parseFloat(selectedRating);


            const priceMatch =
                selectedPrice === "all" ||
                restaurantPrice ===
                    selectedPrice;


            if (
                cuisineMatch &&
                ratingMatch &&
                priceMatch
            ) {

                restaurant.style.display =
                    "";

                visibleCount++;

            } else {

                restaurant.style.display =
                    "none";

            }

        }
    );


    if (noResults) {

        if (visibleCount === 0) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

    }

}


/* ============================================
   RESET RESTAURANT FILTERS
============================================ */

function resetRestaurantFilters() {

    const cuisineFilter =
        document.getElementById(
            "cuisine-filter"
        );

    const ratingFilter =
        document.getElementById(
            "rating-filter"
        );

    const priceFilter =
        document.getElementById(
            "price-filter"
        );


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


    trackingSteps.forEach(
        function(step, index) {

            if (index === 0) {

                step.classList.add("active");

            } else {

                step.classList.remove("active");

            }

        }
    );


    let currentStep = 1;


    const interval =
        setInterval(
            function() {

                if (
                    currentStep >=
                    trackingSteps.length
                ) {

                    clearInterval(interval);

                    return;

                }


                trackingSteps[
                    currentStep
                ].classList.add("active");


                currentStep++;


                if (
                    currentStep >=
                    trackingSteps.length
                ) {

                    clearInterval(interval);

                }

            },
            3000
        );

}


/* ============================================
   INITIALIZE WEBSITE
============================================ */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayFoodItems();

        updateCart();

    }
);
