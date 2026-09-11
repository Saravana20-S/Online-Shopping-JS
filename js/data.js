import { Product } from "./product.js";


/*
    Product data

    We create Product objects using the Product class.
*/

export const products = [

    new Product(
        101,
        "Laptop",
        50000,
        "Electronics",
        4.5,
        "images/laptop.jpg"
    ),

    new Product(
        102,
        "Smartphone",
        25000,
        "Electronics",
        4.3,
        "images/smartphone.jpg"
    ),

    new Product(
        103,
        "Headphones",
        3000,
        "Electronics",
        4.6,
        "images/headphones.jpg"
    ),

    new Product(
        104,
        "Cotton T-Shirt",
        799,
        "Clothing",
        4.2,
        "images/tshirt.jpg"
    ),

    new Product(
        105,
        "Running Shoes",
        2499,
        "Clothing",
        4.4,
        "images/shoes.jpg"
    ),

    new Product(
        106,
        "Smart Watch",
        4999,
        "Accessories",
        4.1,
        "images/watch.jpg"
    ),

    new Product(
        107,
        "JavaScript Book",
        899,
        "Books",
        4.8,
        "images/book.jpg"
    ),

    new Product(
        108,
        "Travel Backpack",
        1999,
        "Accessories",
        4.5,
        "images/backpack.jpg"
    )

];