const apiKey = "3da186cea02cf61bf87b0a2d58d7736d";

// DOM elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("click-btn");
const weatherList = document.querySelectorAll(".list-group");//lista da temp semana
const dateElement = document.querySelector("#date span")
const weatherIconElement = document.querySelector("#weather-icon");//new
const tempElement = document.querySelector("#temp span");//new
const windElement = document.querySelector("#wind span");//new
const humidityElement = document.querySelector("#humidity span")


//function
const getWeatherData =  async (city) => {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const res = await fetch(apiURL) 
  const data = await res.json()
  console.log(data);
};

const showWeatherData = async (city) => {
  const data =  await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  // descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  cityElement.setAttribute(apiCityURL + data.sys.city);
  windElement.innerText = `${data.wind.speed}mph`;
  humidityElement.innerText = `${data.main.humidity}%`; 
};

//event
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  getWeatherData(city)
});

cityInput.addEventListener("keyup", (e) =>{
  if (e.code === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }
});
