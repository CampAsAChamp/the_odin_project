const homePageLoad = () => {
    const content = document.querySelector("#content");
    const foodImage = document.createElement("img");
    foodImage.src = "https://source.unsplash.com/random";

    const headline = document.createElement("h1");
    headline.textContent = "My Restaraunt Headline";

    const description = document.createElement("h3");
    description.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae hic maiores mollitia blanditiis distinctio rem omnis deserunt minus. Ad explicabo non officia pariatur perspiciatis hic molestias, sit necessitatibus magni!";

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(foodImage);
};

export { homePageLoad };
