var getWeatherData = function(cityname) {
    //format the weathermap api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=ed3ceecb82da99a626e9f6aef02e2dbb";
    
    //make a request to the URL
    fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });   
  });
};

var userFormEl = document.querySelector("#user-form");
var cityNameInputEl = document.querySelector("#cityname");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var username = cityNameInputEl.value.trim();

    if (cityname) {
        getWeatherData(cityname);
        cityNameInputEl.value = "";
    } else {
        alert("Please enter a city name")
    }
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);