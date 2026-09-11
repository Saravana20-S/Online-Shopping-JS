/*
    MAIN APPLICATION FILE

    Responsibilities:

    1. Load products
    2. Display products
    3. Search
    4. Filter
    5. Sort
    6. Add products to cart
    7. Update cart
    8. Checkout
    9. Form validation
    10. Exception handling
*/


import { products } from "./data.js";

import { Cart } from "./cart.js";

import {
    renderProducts,
    renderCart,
    updateCartStatistics
} from "./ui.js";

import { validateCheckoutForm } from "./validation.js";



/* =====================================================
   APPLICATION STATE
===================================================== */


/*
    Create cart object.
*/

const cart = new Cart();


/*
    Store current category.

    Initially all products are displayed.
*/

let currentCategory = "All";


/*
    Store current search text.
*/

let currentSearch = "";



/* =====================================================
   DOM ELEMENTS
===================================================== */

const productContainer =
    document.getElementById("productContainer");


const searchInput =
    document.getElementById("searchInput");


const searchButton =
    document.getElementById("searchButton");


const sortSelect =
    document.getElementById("sortSelect");


const categoryButtons =
    document.querySelectorAll(".category-button");


const cartButton =
    document.getElementById("cartButton");


const cartSection =
    document.getElementById("cartSection");


const closeCart =
    document.getElementById("closeCart");


const cartContainer =
    document.getElementById("cartContainer");


const checkoutButton =
    document.getElementById("checkoutButton");


const checkoutForm =
    document.getElementById("checkoutForm");



/* =====================================================
   DISPLAY PRODUCTS
===================================================== */


/*
    This function decides which products
    should currently be displayed.
*/

function displayProducts() {

    try {

        /*
            Start with all products.

            Spread operator creates a copy
            so the original array is not changed.
        */

        let filteredProducts = [...products];


        /* ---------------------------------------------
           CATEGORY FILTER
        --------------------------------------------- */

        if (currentCategory !== "All") {

            filteredProducts =
                filteredProducts.filter(

                    product =>
                        product.category ===
                        currentCategory

                );

        }


        /* ---------------------------------------------
           SEARCH FILTER
        --------------------------------------------- */

        if (currentSearch !== "") {

            filteredProducts =
                filteredProducts.filter(

                    product =>
                        product.name
                            .toLowerCase()
                            .includes(
                                currentSearch.toLowerCase()
                            )

                );

        }


        /* ---------------------------------------------
           SORTING
        --------------------------------------------- */

        const sortValue =
            sortSelect.value;


        if (sortValue === "price-low") {

            filteredProducts.sort(
                (a, b) => a.price - b.price
            );

        }


        else if (sortValue === "price-high") {

            filteredProducts.sort(
                (a, b) => b.price - a.price
            );

        }


        else if (sortValue === "name-az") {

            filteredProducts.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );

        }


        else if (sortValue === "name-za") {

            filteredProducts.sort(
                (a, b) =>
                    b.name.localeCompare(a.name)
            );

        }


        /*
            Render products on page.
        */

        renderProducts(
            filteredProducts,
            productContainer,
            addProductToCart
        );


    } catch (error) {

        /*
            Exception handling.
        */

        console.error(
            "Error displaying products:",
            error
        );

        alert(
            "Something went wrong while loading products."
        );

    }

}



/* =====================================================
   ADD PRODUCT TO CART
===================================================== */

function addProductToCart(productId) {

    try {

        /*
            Find product by ID.
        */

        const product =
            products.find(
                product =>
                    product.id === productId
            );


        /*
            Product doesn't exist.
        */

        if (!product) {

            throw new Error(
                "Product not found."
            );

        }


        /*
            Add product.
        */

        cart.addProduct(product);


        /*
            Update UI.
        */

        updateCart();


        /*
            User feedback.
        */

        alert(
            `${product.name} added to cart!`
        );


    } catch (error) {

        console.error(error);

        alert(
            "Unable to add product to cart."
        );

    }

}



/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    renderCart(

        cart,

        cartContainer,

        handleCartOperation

    );


    updateCartStatistics(cart);

}



/* =====================================================
   HANDLE CART OPERATIONS
===================================================== */

function handleCartOperation(
    operation,
    productId
) {

    try {

        switch (operation) {

            case "increase":

                cart.increaseQuantity(
                    productId
                );

                break;


            case "decrease":

                cart.decreaseQuantity(
                    productId
                );

                break;


            case "remove":

                cart.removeProduct(
                    productId
                );

                break;


            default:

                throw new Error(
                    "Invalid cart operation."
                );

        }


        /*
            Refresh cart UI.
        */

        updateCart();

    } catch (error) {

        console.error(
            "Cart operation failed:",
            error
        );

        alert(
            "Unable to update cart."
        );

    }

}



/* =====================================================
   SEARCH
===================================================== */

function performSearch() {

    currentSearch =
        searchInput.value.trim();

    displayProducts();

}


searchButton.addEventListener(
    "click",
    performSearch
);


/*
    Search while typing.
*/

searchInput.addEventListener(
    "input",
    performSearch
);



/* =====================================================
   CATEGORY FILTER
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",

        () => {

            /*
                Remove active class
                from all buttons.
            */

            categoryButtons.forEach(
                button =>
                    button.classList.remove("active")
            );


            /*
                Add active class
                to clicked button.
            */

            button.classList.add("active");


            /*
                Get selected category.
            */

            currentCategory =
                button.dataset.category;


            /*
                Refresh products.
            */

            displayProducts();

        }

    );

});



/* =====================================================
   SORTING
===================================================== */

sortSelect.addEventListener(
    "change",
    displayProducts
);



/* =====================================================
   CART OPEN
===================================================== */

cartButton.addEventListener(
    "click",

    () => {

        cartSection.classList.add("show");

        /*
            Scroll to cart.
        */

        cartSection.scrollIntoView({
            behavior: "smooth"
        });

    }

);



/* =====================================================
   CART CLOSE
===================================================== */

closeCart.addEventListener(
    "click",

    () => {

        cartSection.classList.remove("show");

    }

);



/* =====================================================
   CHECKOUT BUTTON
===================================================== */

checkoutButton.addEventListener(
    "click",

    () => {

        /*
            Don't allow checkout
            if cart is empty.
        */

        if (cart.items.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        /*
            Scroll to checkout.
        */

        document
            .getElementById("checkout")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

);



/* =====================================================
   CHECKOUT FORM
===================================================== */

checkoutForm.addEventListener(
    "submit",

    event => {

        /*
            Prevent page refresh.
        */

        event.preventDefault();


        try {

            /*
                Validate form.
            */

            const valid =
                validateCheckoutForm();


            if (!valid) {

                return;

            }


            /*
                Cart must contain products.
            */

            if (cart.items.length === 0) {

                alert(
                    "Please add products before placing an order."
                );

                return;

            }


            /*
                Order successfully placed.
            */

            const total =
                cart.getTotal();


            alert(

                `Order placed successfully!\n\n` +

                `Total Amount: ₹${total.toLocaleString("en-IN")}`

            );


            /*
                Clear cart.
            */

            cart.clearCart();


            /*
                Refresh UI.
            */

            updateCart();


            /*
                Reset checkout form.
            */

            checkoutForm.reset();


        } catch (error) {

            console.error(
                "Checkout error:",
                error
            );

            alert(
                "Something went wrong during checkout."
            );

        }

    }

);



/* =====================================================
   INITIAL APPLICATION LOAD
===================================================== */


/*
    Display products when application starts.
*/

displayProducts();


/*
    Initialize cart.
*/

updateCart();