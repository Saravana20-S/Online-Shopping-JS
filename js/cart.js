/*
    Cart class

    Responsible for all shopping cart operations.
*/

export class Cart {

    constructor() {

        /*
            Array containing cart items.

            Each item will look like:

            {
                product: Product,
                quantity: 2
            }
        */

        this.items = [];

    }


    /*
        Add product to cart.
    */

    addProduct(product) {

        /*
            Check whether product already exists.
        */

        const existingItem = this.items.find(
            item => item.product.id === product.id
        );


        if (existingItem) {

            /*
                If product already exists,
                increase quantity.
            */

            existingItem.quantity++;

        } else {

            /*
                Otherwise add a new cart item.
            */

            this.items.push({

                product: product,

                quantity: 1

            });

        }

    }


    /*
        Remove product completely.
    */

    removeProduct(productId) {

        this.items = this.items.filter(
            item => item.product.id !== productId
        );

    }


    /*
        Increase quantity.
    */

    increaseQuantity(productId) {

        const item = this.items.find(
            item => item.product.id === productId
        );


        if (item) {

            item.quantity++;

        }

    }


    /*
        Decrease quantity.
    */

    decreaseQuantity(productId) {

        const item = this.items.find(
            item => item.product.id === productId
        );


        if (!item) {

            return;

        }


        /*
            If quantity becomes zero,
            remove the product.
        */

        if (item.quantity > 1) {

            item.quantity--;

        } else {

            this.removeProduct(productId);

        }

    }


    /*
        Calculate total price.

        reduce() is used here.
    */

    getTotal() {

        return this.items.reduce(

            (total, item) => {

                return total +
                    item.product.price *
                    item.quantity;

            },

            0

        );

    }


    /*
        Calculate total number of products.
    */

    getTotalItems() {

        return this.items.reduce(

            (total, item) => {

                return total + item.quantity;

            },

            0

        );

    }


    /*
        Empty the cart.
    */

    clearCart() {

        this.items = [];

    }

}