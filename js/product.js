/*
    Product class

    This class represents one product
    in our online shopping application.
*/

export class Product {

    constructor(
        id,
        name,
        price,
        category,
        rating,
        image
    ) {

        this.id = id;

        this.name = name;

        this.price = price;

        this.category = category;

        this.rating = rating;

        this.image = image;
    }


    /*
        Method to return formatted price.
    */

    getFormattedPrice() {

        return this.price.toLocaleString("en-IN");
    }


    /*
        Method to return rating stars.
    */

    getStars() {

        return "⭐".repeat(Math.round(this.rating));
    }

}