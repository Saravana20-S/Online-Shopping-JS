/*
    Validate checkout form.

    Returns true if everything is valid.
*/

export function validateCheckoutForm() {

    let isValid = true;


    // Get values from form

    const name =
        document.getElementById("customerName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const pinCode =
        document.getElementById("pinCode").value.trim();


    /*
        Clear previous errors.
    */

    clearErrors();


    // Name validation

    if (name === "") {

        showError(
            "customerNameError",
            "Name is required."
        );

        isValid = false;

    } else if (name.length < 3) {

        showError(
            "customerNameError",
            "Name must contain at least 3 characters."
        );

        isValid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        showError(
            "emailError",
            "Email is required."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError(
            "emailError",
            "Enter a valid email address."
        );

        isValid = false;

    }


    // Phone validation

    const phonePattern =
        /^[6-9]\d{9}$/;


    if (phone === "") {

        showError(
            "phoneError",
            "Phone number is required."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            "phoneError",
            "Enter a valid 10 digit phone number."
        );

        isValid = false;

    }


    // Address validation

    if (address === "") {

        showError(
            "addressError",
            "Address is required."
        );

        isValid = false;

    }


    // City validation

    if (city === "") {

        showError(
            "cityError",
            "City is required."
        );

        isValid = false;

    }


    // PIN validation

    const pinPattern =
        /^\d{6}$/;


    if (pinCode === "") {

        showError(
            "pinCodeError",
            "PIN code is required."
        );

        isValid = false;

    } else if (!pinPattern.test(pinCode)) {

        showError(
            "pinCodeError",
            "PIN code must contain 6 digits."
        );

        isValid = false;

    }


    return isValid;

}


/*
    Display validation error.
*/

function showError(elementId, message) {

    document.getElementById(elementId)
        .textContent = message;

}


/*
    Clear all validation errors.
*/

function clearErrors() {

    const errors =
        document.querySelectorAll(".error");


    errors.forEach(error => {

        error.textContent = "";

    });

}