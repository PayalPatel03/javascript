// API key 
const apiKey = "581ce92b85fceec3c210d9faa500eccb";


const dailyWeatherEl = document.querySelector("#daily-weather");
const searchBtn = document.querySelector("#search-btn");
const cityNameInput = document.querySelector("#cityName");
const forecastWeather = document.querySelector("#forecast-weather");
const citySearchName = document.querySelector("#city-search-term");
const cityList = document.querySelector("#city-list");
const clearHistoryBtn = document.querySelector("#clear-history-btn");


const formSubmitHandler = function(event){
    event.preventDefault();

    const cityName = cityNameInput.value.trim();

    if (cityName){
        getDailyWeather(cityName);
        getForecastWeather(cityName);
        saveSearch();
    } else {
        alert("Please enter a City Name");
    }
};


const getDailyWeather = function(cityName){
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apiKey;

    fetch(apiUrl)
        .then(function(response){
            if (response.ok){
                response.json().then(function(data){
                    const currentDate = new Date(data.dt * 1000).toLocaleDateString();
                    citySearchName.textContent = cityName + " " + currentDate;

                    const weatherIcon = document.querySelector("#weather-icon");
                    weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

                    const temp = document.querySelector("#temperature");
                    temp.innerHTML = "Temperature: " + k2c(data.main.temp) + "&#176;" + "C";

                    const humidity = document.querySelector("#humidity");
                    humidity.innerHTML = "Humidity: " + data.main.humidity + "%";

                    const wind = document.querySelector("#wind");
                    wind.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";

                    const lat = data.coord.lat;
                    const lon = data.coord.lon;
                    const UVurl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

                    fetch(UVurl)
                        .then(function(response){
                            response.json().then(function(data){
                                const UVindex = document.querySelector("#UV-index");
                                UVindex.innerHTML = "UV-index: " + data[0].value;
                                UVindex.className = "";

                                if (data[0].value < 4){
                                    UVindex.classList.add("bg-success", "text-light", "p-1");
                                } else if(data[0].value < 8) {
                                    UVindex.classList.add("bg-warning", "text-light", "p-1");
                                } else {
                                    UVindex.classList.add("bg-danger", "text-light", "p-1");
                                }
                            });
                        });
                });
            } else {
                alert("Error: did not recognize City");
            }
        })
        .catch(function(error){
            alert("Unable to connect to Weather.com");
        });
};


const getForecastWeather = function(cityName){
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            forecastWeather.innerHTML = "";

            for (let i = 1; i < data.list.length; i += 8){
                const forecastEl = document.createElement("div");
                forecastEl.classList.add("weather-card");

                const dateForecast = document.createElement("h5");
                dateForecast.textContent = new Date(data.list[i].dt * 1000).toLocaleDateString();

                const iconForecast = document.createElement("img");
                iconForecast.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";

                const tempertaureForecast = document.createElement("p");
                tempertaureForecast.innerHTML = "Temperature: " + k2c(data.list[i].main.temp) + "&#176;" + "C";

                const humidityForecast = document.createElement("p");
                humidityForecast.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";

                const windForecast = document.createElement("p");
                windForecast.innerHTML = "Wind Speed: " + data.list[i].wind.speed + " MPH";

                forecastEl.append(dateForecast);
                forecastEl.append(iconForecast);
                forecastEl.append(tempertaureForecast);
                forecastEl.append(windForecast);
                forecastEl.append(humidityForecast);

                forecastWeather.append(forecastEl);
            }
        });
    });
};


const cityClickHanlder = function(event){
    const cityName = event.target.textContent;
    getForecastWeather(cityName);
    getDailyWeather(cityName);
};

let cities = JSON.parse(localStorage.getItem("cities")) || [];


const saveSearch = function(){
    const cityName = cityNameInput.value.trim();

    if (!cities.includes(cityName)){
        cities.push(cityName);
        localStorage.setItem("cities", JSON.stringify(cities));
    }

    cityList.innerHTML = "";

    for (let i = 0; i < cities.length; i++){
        const city = cities[i];
        const button = document.createElement("button");
        button.textContent = city;
        button.classList.add("btn");
        cityList.appendChild(button);

        button.addEventListener("click", cityClickHanlder);
    }
};


clearHistoryBtn.addEventListener("click", function(){
    localStorage.clear();
    cities = [];
    cityList.innerHTML = "";
});

const k2c = function(k){
    return Math.floor(k - 273.15);
};


searchBtn.addEventListener("click", formSubmitHandler);

saveSearch();
