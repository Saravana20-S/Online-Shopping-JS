# 🛒 ShopEase - Online Shopping Product Catalog

## 📌 Project Overview

ShopEase is a responsive e-commerce-style product catalog application developed using **HTML5, CSS3, and Vanilla JavaScript**.

The application allows users to browse products, search and filter products, sort products, add products to a shopping cart, modify quantities, calculate the total amount, and complete a checkout form with validation.

The project is designed to demonstrate core frontend development concepts including DOM manipulation, JavaScript arrays and objects, classes, array methods, form validation, responsive design, and exception handling.

---

## 🎯 Objectives

* Build a responsive e-commerce-style frontend.
* Practice HTML5 semantic structure.
* Create reusable product cards.
* Implement responsive layouts using CSS Grid and Flexbox.
* Implement Media Queries.
* Manipulate the DOM using JavaScript.
* Work with JavaScript arrays and objects.
* Use JavaScript classes.
* Practice `map()`, `filter()`, `forEach()`, `find()`, and `reduce()`.
* Implement product search.
* Implement category filtering.
* Implement product sorting.
* Implement shopping cart functionality.
* Implement quantity management.
* Calculate cart totals dynamically.
* Implement checkout form validation.
* Practice JavaScript exception handling.
* Maintain the project using Git.

---

## 🚀 Features

### Home Page

* Responsive header
* Navigation menu
* Hero section
* Shop Now button
* Footer

### Product Catalog

* Dynamic product cards
* Product image
* Product name
* Product category
* Product price
* Product rating
* Add to Cart button

### Search

Users can search products by name.

Example:

```text
laptop
```

The application dynamically displays matching products.

### Category Filter

Available categories:

* All
* Electronics
* Clothing
* Books
* Accessories

### Sorting

Products can be sorted using:

* Price: Low → High
* Price: High → Low
* Name: A → Z
* Name: Z → A

### Shopping Cart

Users can:

* Add products
* Remove products
* Increase quantity
* Decrease quantity
* View total items
* View total price
* Proceed to checkout

### Checkout

The checkout form contains:

* Customer Name
* Email
* Phone
* Address
* City
* PIN Code

Validation is provided for all required fields.

---

## 🧰 Technologies Used

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| HTML5              | Webpage structure       |
| CSS3               | Styling                 |
| Flexbox            | Responsive layout       |
| CSS Grid           | Product layout          |
| Media Queries      | Mobile responsiveness   |
| JavaScript ES6+    | Application logic       |
| DOM API            | Dynamic UI              |
| JavaScript Classes | Product and Cart models |
| Git                | Version control         |

---

## 📂 Project Structure

```text
online-shopping-product-catalog/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── product.js
│   ├── cart.js
│   ├── validation.js
│   ├── ui.js
│   └── app.js
│
├── images/
│   ├── laptop.jpg
│   ├── smartphone.jpg
│   ├── headphones.jpg
│   ├── tshirt.jpg
│   ├── shoes.jpg
│   ├── watch.jpg
│   ├── book.jpg
│   └── backpack.jpg
│
└── README.md
```

---

## 🧠 JavaScript Concepts Demonstrated

### Arrays

```javascript
const products = [];
const cart = [];
```

### Objects

Each product is represented using a JavaScript object/class instance.

```javascript
new Product(
    101,
    "Laptop",
    50000,
    "Electronics",
    4.5,
    "images/laptop.jpg"
);
```

### Classes

```javascript
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
```

### filter()

Used for category filtering and search.

```javascript
products.filter(
    product => product.category === "Electronics"
);
```

### map()

Used to dynamically generate product card HTML.

```javascript
products.map(
    product => `<div>${product.name}</div>`
);
```

### forEach()

Used for iterating through products and cart items.

```javascript
products.forEach(product => {
    console.log(product.name);
});
```

### reduce()

Used to calculate the cart total.

```javascript
const total = cart.reduce(
    (sum, item) =>
        sum + item.price * item.quantity,
    0
);
```

### Arrow Functions

```javascript
const getProducts = () => {
    return products;
};
```

### Exception Handling

```javascript
try {
    // application operation
} catch (error) {
    console.error(error);
}
```

---

## 📱 Responsive Design

The application supports:

### Desktop

```text
[ Product ] [ Product ] [ Product ] [ Product ]
```

### Tablet

```text
[ Product ] [ Product ] [ Product ]
```

### Small Tablet

```text
[ Product ] [ Product ]
```

### Mobile

```text
[ Product ]

[ Product ]

[ Product ]
```

Responsive behavior is implemented using CSS Grid, Flexbox, and Media Queries.

---

## ▶️ How to Run

### Option 1 - VS Code

Open the project in VS Code.

Install the **Live Server** extension if it is not already installed.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

The application will open in your browser.

---

### Option 2 - IntelliJ IDEA

Open the project folder in IntelliJ IDEA.

Open:

```text
index.html
```

Right-click the file and select:

```text
Open in Browser
```

Alternatively, use a local development server such as Live Server.

---

## 🧪 Application Testing

### Test 1 - Product Display

Open the application.

Expected:

* Products are displayed.
* Product image is visible.
* Product name is visible.
* Price is visible.
* Rating is visible.

### Test 2 - Search

Search:

```text
Laptop
```

Expected:

```text
Laptop
```

should be displayed.

### Test 3 - Category

Select:

```text
Electronics
```

Expected:

Only electronics products should be displayed.

### Test 4 - Sorting

Select:

```text
Price: Low → High
```

Expected:

Products should be displayed from lowest price to highest price.

### Test 5 - Add to Cart

Click:

```text
Add to Cart
```

Expected:

* Product appears in cart.
* Cart count increases.
* Total price is updated.

### Test 6 - Increase Quantity

Click:

```text
+
```

Expected:

Quantity increases and total price is recalculated.

### Test 7 - Decrease Quantity

Click:

```text
−
```

Expected:

Quantity decreases and total price is recalculated.

### Test 8 - Remove

Click:

```text
Remove
```

Expected:

Product is removed from cart.

### Test 9 - Checkout Validation

Submit the checkout form without entering information.

Expected:

Validation errors should be displayed.

### Test 10 - Successful Checkout

Enter valid:

* Name
* Email
* Phone
* Address
* City
* PIN Code

Expected:

Order should be placed successfully.

---

## 🔢 Cart Calculation

The cart total is calculated dynamically using `reduce()`.

```javascript
const total = this.items.reduce(
    (total, item) => {
        return total +
            item.product.price *
            item.quantity;
    },
    0
);
```

---

## 🔀 Application Flow

```text
User Opens Website
        ↓
index.html
        ↓
app.js
        ↓
Load Product Data
        ↓
Display Products
        ↓
Search / Filter / Sort
        ↓
User Clicks Add to Cart
        ↓
Cart
        ↓
Increase / Decrease / Remove
        ↓
Calculate Total
        ↓
Checkout Form
        ↓
Validation
        ↓
Place Order
```

---

## 📊 Learning Flow

```text
HTML5
   ↓
CSS3
   ↓
Flexbox
   ↓
CSS Grid
   ↓
Media Queries
   ↓
Forms
   ↓
DOM
   ↓
JavaScript
   ↓
Arrays & Objects
   ↓
Array Methods
   ↓
Classes
   ↓
Events
   ↓
Exception Handling
   ↓
Git & GitHub
```

---

## 🔮 Future Enhancements

Possible future improvements:

* Product details page
* Product quantity limits
* Wishlist
* Login and registration
* Dark mode
* LocalStorage cart persistence
* Payment integration
* Backend REST API
* Database integration
* User authentication
* Order history
* Admin product management

---

## 👨‍💻 Project Status

**Status:** Completed Frontend Version

**Architecture:** Vanilla JavaScript Frontend

**Backend:** Not required

**Database:** Not required

---

## 📄 License

This project is created for educational and learning purposes.
