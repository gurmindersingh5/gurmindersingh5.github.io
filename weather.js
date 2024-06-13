async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '58256befe2c4ca018310daa1c5a9b771'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    
    if (data.cod === 200) {
        const weather = `Weather in ${data.name}: ${data.weather[0].description}, Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
        document.getElementById('weather-result').innerText = weather;
    } else {
        document.getElementById('weather-result').innerText = 'City not found.';
    }
}
