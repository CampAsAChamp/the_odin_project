const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

// Using Promises (for Image 1)
fetch('https://api.giphy.com/v1/gifs/translate?api_key=___GIPHY_API_KEY____&s=cats', { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response.data.images.original.url);
        img1.src = response.data.images.original.url;

    });

// Using Async/Await (for Image 2)
async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=___GIPHY_API_KEY____&s=cats', { mode: 'cors' })
    const catData = await response.json()

    img2.src = catData.data.images.original.url
}

getCats()