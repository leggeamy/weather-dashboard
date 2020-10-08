var userFormEl = document.querySelector("#user-form");
var cityNameInputEl = document.querySelector("#cityname");
var weatherContainerEl = document.querySelector("#weather-container");
var citySearchTerm = document.querySelector("#city-search-term");

var getWeatherData = function(cityname) {
    //format the weathermap api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=ed3ceecb82da99a626e9f6aef02e2dbb";
    
    //make a request to the URL
    fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
        displayWeather(data, cityname)
    });   
  });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var cityname = cityNameInputEl.value.trim();

    if (cityname) {
        getWeatherData(cityname);
        cityNameInputEl.value = "";
    } else {
        alert("Please enter a city name")
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);

var displayWeather = function(weather, searchTerm) {
    //clear old content
    weatherContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm;

    //loop over weather data
    for (var i = 0; i < weather.length; i++) {
        //format repo name**? not sure how this will apply to the weather
        var weatherName = weather[i].weather.description;
    }

    //create a container for each weather item
    var weatherEl = document.createElement("div");
    weatherEl.classList = "list-item flex-row justify-space-between align-center";

    //create a span element to hold weather item title
    var titleEl = document.createElement("span");
    titleEl.textContent = weatherName

    //append to container
    weatherEl.appendChild(titleEl);

    //append container to the dom
    weatherContainerEl.appendChild(weatherEl);
};