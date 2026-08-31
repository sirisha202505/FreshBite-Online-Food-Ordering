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
        description: "Fresh tomato, mozzarella cheese and basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 2,
        name: "Corn Cheese Pizza",
        price: 349,
        category: "Pizza",
        dietary: "veg",
        description: "Sweet corn, mozzarella cheese and fresh herbs.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 3,
        name: "Chicken Pizza",
        price: 399,
        category: "Pizza",
        dietary: "nonveg",
        description: "Juicy chicken, cheese and delicious pizza sauce.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 4,
        name: "Chicken Burger",
        price: 249,
        category: "Burger",
        dietary: "nonveg",
        description: "Crispy chicken patty with lettuce and cheese.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 5,
        name: "Veg Cheese Burger",
        price: 199,
        category: "Burger",
        dietary: "veg",
        description: "Crispy vegetable patty with cheese and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        name: "Chicken Wings",
        price: 299,
        category: "Chicken",
        dietary: "nonveg",
        description: "Crispy spicy chicken wings served with dip.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 7,
        name: "Chicken Strips",
        price: 279,
        category: "Chicken",
        dietary: "nonveg",
        description: "Golden crispy chicken strips with special sauce.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 8,
        name: "Chocolate Cake",
        price: 199,
        category: "Dessert",
        dietary: "veg",
        description: "Soft chocolate cake with rich chocolate topping.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 9,
        name: "Brownie",
        price: 149,
        category: "Dessert",
        dietary: "veg",
        description: "Warm chocolate brownie with a soft centre.",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 10,
        name: "Fresh Lime",
        price: 99,
        category: "Drinks",
        dietary: "veg",
        description: "Refreshing fresh lime drink.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 11,
        name: "Cold Coffee",
        price: 129,
        category: "Drinks",
        dietary: "veg",
        description: "Creamy chilled coffee with a rich flavour.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 12,
        name: "Paneer Pizza",
        price: 379,
        category: "Pizza",
        dietary: "veg",
        description: "Soft paneer, capsicum, onion and mozzarella.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80"
    }

];


/* ============================================
   CART
============================================ */

let cart = [];


/* ============================================
   DISPLAY FOOD
============================================ */

function displayFood(items) {

    const foodContainer =
        document.getElementById("foodContainer");

    foodContainer.innerHTML = "";


    if (items.length === 0) {

        foodContainer.innerHTML =
            "<p>No food items found.</p>";

        return;
    }


    items.forEach(item => {

        const card = document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <img src="${item.image}" alt="${item.name}">

            <div class="food-info">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="food-meta">

                    <span class="price">
                        ₹${item.price}
                    </span>

                    <span class="diet-tag ${item.dietary}">
                        ${item.dietary === "veg"
                            ? "🟢 Veg"
                            : "🔴 Non-Veg"}
                    </span>

                </div>

                <button class="add-btn"
                        onclick="addToCart(${item.id})">

                    <i class="fas fa-cart-plus"></i>
                    Add to Cart

                </button>

            </div>

        `;


        foodContainer.appendChild(card);

    });

}


/* ============================================
   INITIAL DISPLAY
============================================ */

displayFood(foodItems);


/* ============================================
   CATEGORY FILTER
============================================ */

function filterFood(category) {

    if (category === "all") {

        displayFood(foodItems);

        return;
    }


    const filteredItems =
        foodItems.filter(item =>
            item.category === category
        );


    displayFood(filteredItems);

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ============================================
   DIETARY FILTER
============================================ */

function filterDiet(diet) {

    const buttons =
        document.querySelectorAll(".diet-filters button");


    buttons.forEach(button =>
        button.classList.remove("active")
    );


    event.target.classList.add("active");


    if (diet === "all") {

        displayFood(foodItems);

        return;
    }


    const filteredItems =
        foodItems.filter(item =>
            item.dietary === diet
        );


    displayFood(filteredItems);

}


/* ============================================
   ADD TO CART
============================================ */

function addToCart(itemId) {

    const item =
        foodItems.find(food =>
            food.id === itemId
        );


    const existingItem =
        cart.find(food =>
            food.id === itemId
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            ...item,
            quantity: 1
        });

    }


    updateCart();


    alert(`${item.name} added to cart!`);

}


/* ============================================
   UPDATE CART
============================================ */

function updateCart() {

    const cartContainer =
        document.getElementById("cartItems");


    const cartCount =
        document.getElementById("cartCount");


    cartContainer.innerHTML = "";


    let subtotal = 0;

    let totalQuantity = 0;


    if (cart.length === 0) {

        cartContainer.innerHTML =
            `<p class="empty-cart">
                Your cart is empty 🛒
            </p>`;

    }


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;

        totalQuantity +=
            item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img src="${item.image}"
                 alt="${item.name}">

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>


            <div class="quantity-controls">

                <button onclick="changeQuantity(${item.id}, -1)">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="changeQuantity(${item.id}, 1)">
                    +
                </button>

            </div>


            <strong>
                ₹${item.price * item.quantity}
            </strong>


            <button class="remove-btn"
                    onclick="removeFromCart(${item.id})">

                <i class="fas fa-trash"></i>

            </button>

        `;


        cartContainer.appendChild(cartItem);

    });


    cartCount.textContent =
        totalQuantity;


    document.getElementById("subtotal")
        .textContent = `₹${subtotal}`;


    const deliveryFee =
        cart.length > 0 ? 40 : 0;


    document.getElementById("deliveryFee")
        .textContent = `₹${deliveryFee}`;


    document.getElementById("totalPrice")
        .textContent =
        `₹${subtotal + deliveryFee}`;

}


/* ============================================
   CHANGE QUANTITY
============================================ */

function changeQuantity(itemId, change) {

    const item =
        cart.find(food =>
            food.id === itemId
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(food =>
                food.id !== itemId
            );

    }


    updateCart();

}


/* ============================================
   REMOVE FROM CART
============================================ */

function removeFromCart(itemId) {

    cart =
        cart.filter(item =>
            item.id !== itemId
        );


    updateCart();

}


/* ============================================
   CHECKOUT
============================================ */

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add some food first!");

        return;
    }

    document
        .getElementById("checkout")
        .scrollIntoView({
            behavior: "smooth"
        });
}





        /* Show order placed popup */

        document
            .getElementById("successPopup")
            .style.display = "flex";


        /* Clear cart */

        cart = [];

        updateCart();


        /* Clear checkout form */

        this.reset();


        /* Start order tracking */

        startOrderTracking();


        /* Go to tracking after 1 second */

        setTimeout(function() {

            document
                .getElementById("tracking")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 1000);

    });

/* ============================================
   PLACE ORDER
============================================ */

document
    .getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }


        /* Show success popup */

        document
            .getElementById("successPopup")
            .style.display = "flex";


        /* Clear cart */

        cart = [];

        updateCart();


        /* Reset checkout form */

        this.reset();


        /* Start order tracking */

        startOrderTracking();


        /* Go to tracking section */

        setTimeout(function() {

            document
                .getElementById("tracking")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 1000);

    });

/* ============================================
   CLOSE POPUP
============================================ */

function closePopup() {

    document
        .getElementById("successPopup")
        .style.display = "none";

}


/* ============================================
   LOGIN
============================================ */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value;


        document
            .getElementById("loginMessage")
            .textContent =
            `Welcome! Logged in as ${email}`;

        this.reset();

    });


/* ============================================
   CONTACT FORM
============================================ */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        alert(
            "Thank you! Your message has been sent successfully."
        );


        this.reset();

    });


/* ============================================
   INITIAL CART
============================================ */

updateCart();
/* ============================================
   ORDER TRACKING
============================================ */

let orderStatus = 1;


/*
    1 = Order Placed
    2 = Preparing
    3 = Out for Delivery
    4 = Delivered
*/


function updateOrderTracking() {

    const statusText =
        document.getElementById("trackingStatus");

    const locationText =
        document.getElementById("locationText");

    const bike =
        document.getElementById("deliveryBike");


    const step1 =
        document.getElementById("step1");

    const step2 =
        document.getElementById("step2");

    const step3 =
        document.getElementById("step3");

    const step4 =
        document.getElementById("step4");


    const line1 =
        document.getElementById("line1");

    const line2 =
        document.getElementById("line2");

    const line3 =
        document.getElementById("line3");


    /* RESET */

    step1.classList.remove("active");

    step2.classList.remove("active");

    step3.classList.remove("active");

    step4.classList.remove("active");


    line1.classList.remove("active");

    line2.classList.remove("active");

    line3.classList.remove("active");


    /* ========================================
       ORDER PLACED
    ======================================== */

    if (orderStatus === 1) {

        step1.classList.add("active");

        statusText.textContent =
            "Order Placed";

        locationText.textContent =
            "Restaurant Kitchen";

        bike.style.left = "10%";
    }


    /* ========================================
       PREPARING
    ======================================== */

    else if (orderStatus === 2) {

        step1.classList.add("active");

        step2.classList.add("active");

        line1.classList.add("active");

        statusText.textContent =
            "Preparing your food";

        locationText.textContent =
            "Restaurant Kitchen - Food is being prepared";

        bike.style.left = "30%";
    }


    /* ========================================
       OUT FOR DELIVERY
    ======================================== */

    else if (orderStatus === 3) {

        step1.classList.add("active");

        step2.classList.add("active");

        step3.classList.add("active");

        line1.classList.add("active");

        line2.classList.add("active");

        statusText.textContent =
            "Out for Delivery";

        locationText.textContent =
            "Delivery Partner is on the way";

        bike.style.left = "60%";
    }


    /* ========================================
       DELIVERED
    ======================================== */

    else if (orderStatus === 4) {

        step1.classList.add("active");

        step2.classList.add("active");

        step3.classList.add("active");

        step4.classList.add("active");

        line1.classList.add("active");

        line2.classList.add("active");

        line3.classList.add("active");

        statusText.textContent =
            "Delivered";

        locationText.textContent =
            "Your order has been delivered";

        bike.style.left = "85%";
    }

}


/* ============================================
   START ORDER TRACKING
============================================ */

function startOrderTracking() {

    orderStatus = 1;

    updateOrderTracking();


    /* 5 seconds */

    setTimeout(function() {

        orderStatus = 2;

        updateOrderTracking();

    }, 5000);


    /* 10 seconds */

    setTimeout(function() {

        orderStatus = 3;

        updateOrderTracking();

    }, 10000);


    /* 15 seconds */

    setTimeout(function() {

        orderStatus = 4;

        updateOrderTracking();

    }, 15000);

}
