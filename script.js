document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "33d66cfe555c3a079b446dbafba0eb35"; //This is the API key
    const searchBtn = document.getElementById("search-btn");//search button variable(referred to as const to mean constant to avoid misinterpretation when referring to it)
    const cityInput = document.getElementById("city-input");//city variable 

    searchBtn.addEventListener("click", () => {
        const city = cityInput.value;
        if (city) {
            fetchWeatherData(city);
        }
    });

    async function fetchWeatherData(city) {
        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.classList.add("loading");
//s)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            if (data.cod === 200) {
                updateWeatherData(data);
            } else {
                alert("City not found! Please try another city.");//This is the alert displayed when the user tries checking for the weather of a city that doesn't exist or a city that the. API key doesn't cover,okiteggede
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("An error occurred.City may not be yet available in our database.");
        } finally {
            weatherIcon.classList.remove("loading");
        }
    }

    function updateWeatherData(data) {
        document.getElementById("city").textContent = data.name;
        document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent = `${Math.round(data.wind.speed)} km/h`;

        const weatherIcon = document.getElementById("weather-icon");
        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
    }
})
//This is the information displayed in the console
var email="asoboladonor@gmail.com or kesemm74@gmail.com"
var tel="+256756272820 or +256709956125"
var developers="Asobola Donor and Kasirivu Emmanuel"
console.log("Developed by "+developers)
console.log("For more apps email us on "+email)
console.log("Or call us on "+tel)