 document.getElementById("getWeather").onclick = () => {
  const city = document.getElementById("city").value;
  const output = document.getElementById("output");
  const apiKey = "9e493cfa11c4f332a27bc21f472554ca";

  if (!city) {
    output.textContent = "Enter a city name.";
    return
  }
  output.textContent = "Loading...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      output.innerHTML = `
        <strong>${data.name}, ${data.sys.country}</strong><br>
        Weather: ${data.weather[0].description}<br>
        Temperature: ${data.main.temp}°C (Feels like ${data.main.feels_like}°C)<br>
        Humidity: ${data.main.humidity}%<br>
        Wind: ${data.wind.speed} m/s
      `;
    })
    .catch(error => {
      output.textContent = error.message;
    });
};
