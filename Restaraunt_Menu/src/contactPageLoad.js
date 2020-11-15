const contactPageLoad = () => {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: +1 (123) 456-7890";

    const email = document.createElement("p");
    email.textContent = "myemail@website.com";

    content.appendChild(headline);
    content.appendChild(phoneNumber);
    content.appendChild(email);
};

export { contactPageLoad };
