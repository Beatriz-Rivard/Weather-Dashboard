const apiKey = "3da186cea02cf61bf87b0a2d58d7736d";

// DOM elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("click-btn");
const weatherList = document.querySelectorAll(".list-group");//lista da temp semana


//function
const getWeatherData =  async(city) => {

  const apiKey = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  const res = await fetch(apiKey) 
  const data = await res.json()
  console.log(data)
};

const showWeatherData = (city) => {
  console.log(city)
};

//event
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city)
});


