/*
    Render products on the webpage.
*/

export function renderProducts(
    productList,
    productContainer,
    addToCartCallback
) {

    /*
        Clear existing products.
    */

    productContainer.innerHTML = "";


    /*
        If no products exist.
    */

    if (productList.length === 0) {

        document.getElementById("noProducts")
            .style.display = "block";

        return;

    }


    document.getElementById("noProducts")
        .style.display = "none";


    /*
        map() creates HTML for each product.
    */

    const productHTML = productList.map(product => {

        return `

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <p class="product-price">
                        ₹${product.getFormattedPrice()}
                    </p>

                    <p class="product-rating">
                        ${product.getStars()}
                        (${product.rating})
                    </p>

                    <button
                        class="add-cart-button"
                        data-id="${product.id}">

                        Add to Cart

                    </button>

                </div>

            </div>

        `;

    }).join("");


    /*
        Add generated HTML to DOM.
    */

    productContainer.innerHTML = productHTML;


    /*
        Select all Add to Cart buttons.
    */

    const buttons =
        document.querySelectorAll(".add-cart-button");


    /*
        Add click event to every button.
    */

    buttons.forEach(button => {

        button.addEventListener(
            "click",

            () => {

                const productId =
                    Number(button.dataset.id);

                addToCartCallback(productId);

            }

        );

    });

}


/*
    Render shopping cart.
*/

export function renderCart(
    cart,
    cartContainer,
    updateCartCallback
) {

    cartContainer.innerHTML = "";


    /*
        Empty cart.
    */

    if (cart.items.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <h3>Your cart is empty 🛒</h3>

                <p>
                    Add some products to your cart.
                </p>

            </div>

        `;

        return;

    }


    /*
        forEach() is used to create
        cart items.
    */

    cart.items.forEach(item => {

        const product =
            item.product;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="cart-item-image"
            >


            <div class="cart-item-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

            </div>


            <div class="quantity-controls">

                <button
                    class="quantity-button decrease"
                    data-id="${product.id}">

                    −

                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    class="quantity-button increase"
                    data-id="${product.id}">

                    +

                </button>

            </div>


            <strong>

                ₹${(
                    product.price *
                    item.quantity
                ).toLocaleString("en-IN")}

            </strong>


            <button
                class="remove-button"
                data-id="${product.id}">

                Remove

            </button>

        `;


        cartContainer.appendChild(cartItem);

    });


    /*
        Increase quantity buttons.
    */

    document
        .querySelectorAll(".increase")
        .forEach(button => {

            button.addEventListener(
                "click",

                () => {

                    const id =
                        Number(button.dataset.id);

                    updateCartCallback(
                        "increase",
                        id
                    );

                }

            );

        });


    /*
        Decrease quantity buttons.
    */

    document
        .querySelectorAll(".decrease")
        .forEach(button => {

            button.addEventListener(
                "click",

                () => {

                    const id =
                        Number(button.dataset.id);

                    updateCartCallback(
                        "decrease",
                        id
                    );

                }

            );

        });


    /*
        Remove buttons.
    */

    document
        .querySelectorAll(".remove-button")
        .forEach(button => {

            button.addEventListener(
                "click",

                () => {

                    const id =
                        Number(button.dataset.id);

                    updateCartCallback(
                        "remove",
                        id
                    );

                }

            );

        });

}


/*
    Update cart statistics.
*/

export function updateCartStatistics(cart) {

    document.getElementById("cartCount")
        .textContent = cart.getTotalItems();


    document.getElementById("totalItems")
        .textContent = cart.getTotalItems();


    document.getElementById("cartTotal")
        .textContent =
        cart.getTotal()
            .toLocaleString("en-IN");

}