const apiKey = "ac6e8f5e04bc40b29eeee8044a1f06e0";
const apiLink =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherContainer = document.querySelector(".container");
let input = document.querySelector("#input");
const searchBtn = document.querySelector(".img");
let weatherCondition = document.querySelector(".weather-cond");

async function weatherCheck(city) 
{   //fetching data from the API 
  const response = await fetch(apiLink + city + `&appid=${apiKey}`);
  if (response.status == 404)
   {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-condition").style.display = "none";
  }
   else {
    var data = await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temprature").innerHTML =
      Math.round(data.main.temp) + "c";
    document.querySelector("#wind-speed").innerHTML =
      data.wind.speed + " km/hr";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
      weatherCondition.src = "assets/cloudy.png";
    } else if (data.weather[0].main == "Haze") {
      weatherCondition.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherCondition.src = "assets/drizling.png ";
    } else if (data.weather[0].main == "Mist") {
      weatherCondition.src = "assets/mist.png";
    }
    document.querySelector(".weather-condition").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(input.value);
});
