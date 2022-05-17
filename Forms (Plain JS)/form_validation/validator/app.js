// Should use live inline validation to inform the user whether a field is properly filled in or not
// Highlighting a field red and providing a helpful error message until it has been filled in properly
// Should give an error message if the button is pushed with any active errors or unfilled required fields

const form = document.querySelector("form")
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pw = document.getElementById("password");
const pw_confirmation = document.getElementById("password_confirmation");

// Every time the input changes, check the validity, and display an error message if it isn't valid
email.addEventListener("focusout", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});


pw_confirmation.addEventListener("focusout", () => {
    // if don't match setCustomValidity
    if (pw.value !== pw_confirmation.value) {
        pw_confirmation.setCustomValidity("Passwords dont match!");
    }
    else {
        pw_confirmation.setCustomValidity("");
    }
})





