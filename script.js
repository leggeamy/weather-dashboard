
function getCityName() {
    var cityName = document.querySelector("#cityName").value;
    getWeatherData(cityName);
    makeRow(cityName);
}

function makeRow(cityName) {
    var liEl = document.createElement("li")
    liEl.classList.add("list-group-item", "list-group-item-action");
    var text = cityName;
    liEl.textContent = text;
    var historyEl = document.querySelector('.history');
    console.log(event.target)
    historyEl.onclick = function(){
        console.log(event.target.tagName)
        if (event.target.tagName === "li"){
            getWeatherData(event.target.textContent)
        }
    }
    historyEl.appendChild(liEl);
};

var getWeatherData = function(cityname) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=ed3ceecb82da99a626e9f6aef02e2dbb&units=imperial")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        //clear any old content
        todayEl = document.querySelector("#today");
        todayEl.textContent = " ";
        
        //create html content for current weather
        var titleEl = document.createElement("h3")
        titleEl.classList.add("card-title");
        titleEl.textContent = data.name + " (" + new Date().toLocaleDateString() + ")";
        var cardEl = document.createElement("div");
        cardEl.classList.add("card");
        var windEl = document.createElement("p");
        windEl.classList.add("card-text");
        var humidEl = document.createElement("p");
        humidEl.classList.add("card-text");
        var tempEl = document.createElement("p");
        tempEl.classList.add("card-text");
        humidEl.textContent = "Humidity: " + data.main.humidity + " %";
        tempEl.textContent = "Temperature: " + data.main.temp + " °F";
        var cardBodyEl = document.createElement("div");
        cardBodyEl.classList.add("card-body");
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather.icon);

        titleEl.appendChild(imgEl)
        cardBodyEl.appendChild(titleEl);
        cardBodyEl.appendChild(tempEl);
        cardBodyEl.appendChild(humidEl);
        cardBodyEl.appendChild(windEl);
        cardEl.appendChild(cardBodyEl);
        todayEl.appendChild(cardEl);

        getForecast(cityName);
        getUVIndex(data.coord.lat, data.coord.lon);
    }
)}
  