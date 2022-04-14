const submit_btn = document.querySelector('#submit-btn')
const temp_toggle = document.querySelector("#temp-toggle")
const city_text = document.querySelector('#city-text')
const tempDOM = document.querySelector('#temp');
const tempTagDOM = document.querySelector("#temp-tag")
let temp = 0
let tempTag = 'F'

// Using Async/Await
async function getWeather() {
    const city = document.querySelector('#city').value;
    const units = (tempTag === 'F') ? "imperial" : "metric"

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=___OPEN_WEATHER_API_KEY___&units=${units}`, { mode: 'cors' })
    const weatherData = await response.json()

    // Update all the DOM elements at the same time
    city_text.textContent = city
    temp = weatherData.main.temp
    tempDOM.textContent = temp
    tempTagDOM.textContent = tempTag
}

function convertWeatherUnits() {
    if (tempTag === 'C') {
        //  °F = (°C × 9/5) + 32
        temp = (temp * 9 / 5) + 32
        tempTag = 'F'
    }
    else {
        // °C = (°F − 32) x 5/9
        temp = (temp - 32) * 5 / 9
        tempTag = 'C'
    }

    tempDOM.textContent = temp
    tempTagDOM.textContent = tempTag
}

temp_toggle.addEventListener("click", convertWeatherUnits);
submit_btn.addEventListener("click", getWeather)

// Using Promises
/*
submit_btn.addEventListener("click", () => {
    // Get the current value from the city input field
    const city = document.querySelector('#city').value;
    city_text.textContent = city

    // Get the weather info for the city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=___OPEN_WEATHER_API_KEY___&units=imperial`, { mode: 'cors' })
        .then(function (response) {
            return response.json()
        })
        .then(function (responseJson) {
            temp = responseJson.main.temp
            tempDOM.textContent = temp
            tempTag = "F"
            tempTagDOM.textContent = tempTag
        });
});
*/