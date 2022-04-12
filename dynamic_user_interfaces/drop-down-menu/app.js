/*
You know what we’re talking about here. Picture a nav-bar or a button and when you click it the menu slides down nicely. As mentioned previously, you already know everything you need to create this element. Here are some things to keep in mind:

You can allow the menu to show up either on click or on hover.
You should hard-code the menu items into your HTML but hide/reveal them using JavaScript. You can do this either by adding a class (visible or something) or by manually setting the style in JS.
Make sure the code is reusable! You should be able to create multiple drop-downs on a page without repeating the JavaScript code.
If you bundle your code into a module you can publish it to npm and then install and use it anytime you like! Nothing like publishing your own modules to make you feel like a pro 😎.
*/

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let dropDownContent = button.querySelector(".dropdown-content")
        dropDownContent.classList.toggle("show");
    })
})