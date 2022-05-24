const menuPageLoad = () => {
    const content = document.querySelector("#content");
    const foodImage = document.createElement("img");
    foodImage.src = "https://source.unsplash.com/random/300x300";

    const headline = document.createElement("h3");
    headline.textContent = "Pizza";

    const description = document.createElement("p");
    description.textContent = "Made with Italian sausage and pepproni";

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(foodImage);
};

export { menuPageLoad };
