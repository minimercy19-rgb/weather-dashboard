//API endpoint for weather data
const API_URL = 'https://api.example.com/weather?city=NewYork';

//DOM elements
const button = document.getElementById('fetch-weather');
const display = document.getElementById('weather-display');

//fetch and display weather data
button.addEventListener('click', async () =>{
    try {
        display.textContent = 'Fetching weather data...';

        //fetch weather data using fetch API
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        //update the DOM with fetched data
        display.innerHTML = `
        <p>City: ${data.city}</p>
        <p>Temperature: ${data.temperature}OC</p>
        <p>Condition: ${data.condition}</p>
        `;
    } catch (error) {
        //handle errors gracefully
        display.textContent = `Error: ${error.message}`;
    }
});