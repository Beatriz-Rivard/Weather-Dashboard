const apiKey = "3da186cea02cf61bf87b0a2d58d7736d";

// DOM elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("click-btn");
const weatherList = document.querySelectorAll(".list-group");//lista da temp semana
const weatherIconElement = document.querySelector("#weather-icon");//new
const umidityElement = document.querySelector("#umidity span");//new
const windElement = document.querySelector("#wind span");//new

//function
const getWeatherData =  async (city) => {

  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  const res = await fetch(apiURL) 
  const data = await res.json()
  return data
};

const showWeatherData = async (city) => {
  const data =  await getWeatherData(city);

  cityElement.innerText = data.name
  tempElement.innerText = parseInt(data.main.temp)
  descElement.innerText = data.weather[0].description
  weatherIconElement.setAttribute("src", `http://api.openweathermap.org/img/wn/${data.weather[0].icon}.png`);
};

//event
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  getWeatherData(city)
});

