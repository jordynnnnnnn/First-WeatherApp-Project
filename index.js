function refreshWeather(response) {
   let tempElement = document.querySelector("#temp");
   let temp = response.data.temperature.current;
   let city = document.querySelector("#app-city");
   
   city.innerHTML = response.data.city;
   tempElement.innerHTML = Math.round(temp);
}

function searchCity(city) {
let apiKey = "ca3401aa9fo6993fde3bf6t53aa16d30";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
   event.preventDefault();
   let searchInput = document.querySelector("#search-input");

   searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Adelaide");
