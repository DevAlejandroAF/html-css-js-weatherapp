

const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

document.querySelector(".weather").style.display = "none"
document.querySelector(".error").style.display = "none"

const checkWeather = async function(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if(response.status == 404) {
    document.querySelector(".error").style.display = "block"
  }
  else {
    let data = await response.json();
    //console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";

    const condition = data.weather[0].main;

    if (condition == "Clouds") {
      weatherIcon.src = "/clouds.png"
    }
    else if (condition == "Clear") {
      weatherIcon.src = "/clear.png"
    }
    else if (condition == "Rain") {
      weatherIcon.src = "/rain.png"
    }
    else if (condition == "Drizzle") {
      weatherIcon.src = "/drizzle.png"
    }
    else if (condition == "Mist") {
      weatherIcon.src = "/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})