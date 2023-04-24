const apiKey = "3da186cea02cf61bf87b0a2d58d7736d";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("click-btn");
const cityElement = document.getElementById("city-name");
const weatherIconElement = document.querySelector("#weather-icon");//new
const tempElement = document.querySelector("#temp span");//new
const windElement = document.querySelector("#wind span");//new
const humidityElement = document.querySelector("#humidity span");
const dateElement = document.querySelector("#date span");

// local storage
let lastSearchedCity = localStorage.getItem('lastSearchedCity') || '';

// get weather function data for a given city
const getWeatherData = async (city) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const res = await fetch(apiURL);
  const data = await res.json();
  console.log(data)
};

// displayfunction weather data on the page
const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  windElement.innerText = `${data.wind.speed}mph`;
  humidityElement.innerText = `${data.main.humidity}%`; 
  dateElement.innerText = new Date().toDateString();

  localStorage.setItem('lastSearchedCity', city);
};

// search button
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault()

  const city = cityInput.value

  await showWeatherData(city)
});

// city input
cityInput.addEventListener("keyup", async (e) => {
  if (e.code === "Enter") {
    const city = e.target.value

    await showWeatherData(city)
  }
});

if (lastSearchedCity) {
  showWeatherData(lastSearchedCity)
};
