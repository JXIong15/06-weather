$(document).ready(function () {
    var API_KEY = "48d3bee5ac7cdd8e92b4de30d8718eca";
    var cityArr = JSON.parse(localStorage.getItem("cities")) || []; // array of searched cities

    // creates the button list of the last 10 searched cities
    function createMenu() {
        let listEl = $("#cityList").text("");
        if (cityArr.length > 0) {
            for (var i = 0; i < cityArr.length; i++) {
                var city = cityArr[i];
                var cityBtn = $("<button>").css("text-transform", "capitalize").val(city).text(city).addClass("cityBtn").attr("type", "button");
                listEl.prepend(cityBtn);
                cityBtn.click(cityBtnFunc);
            }
        }
    }
    
    // list of the last 10 searched locations
    createMenu();

    // saves the city in local storage and generates a list of searched cities
    $("#searchBtn").on("click", function(i) { 
        i.preventDefault(); 
        var city = $("#city").val().toLowerCase();
        searchCityWeather(city);
    })

    function searchCityWeather(city) {     
        // gets the current weather
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
            datatype: "json",
            success: function(data) {
                // checks the previous searches array to not duplicate buttons. Creates new city buttons accordingly.
                if(cityArr.indexOf(city) === -1) {
                    cityArr.push(city);
                    if (cityArr.length > 10) { // makes sure the list of previously searched city is limited to 10
                        cityArr.shift();
                    }
                    localStorage.setItem("cities", JSON.stringify(cityArr));
                    createMenu();
                }
                cityCard(data);
                
                // gets the weather for the 5 day forecast
                $.ajax({
                    type: "GET",
                    url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`, 
                    datatype: "json",
                    success: function(data) {
                        weatherCard(data);
                    }
                })
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                alert(errorThrown);
            }
        })
        $("#city").val("");
    }

    // creates the current weather card for the desired city
    function cityCard(data) {
        let dash = $("#cityDash").addClass("cityDash");
        dash.text(""); // empties the dash between each searched city
        // creates the city header
        let cityName = $("<h2>").text(data["name"] + " ").attr("type", "h2");
        let iconURL =  "https://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png";
        let weatherIcon = $("<img alt='weather image'>").attr("src", iconURL);

        cityName.append("(" + moment().format('l') + ")");
        cityName.append(weatherIcon);

        // creates the list for the city
        let cityWeatherList = $("<p>").attr("type", "p").css("font-size", "20px");
        cityWeatherList.append(("Temperature: " + data["main"]["temp"] + " °F" + "<br>"));
        cityWeatherList.append("Humdity: " + data["main"]["humidity"] + "%" + "<br>");
        cityWeatherList.append("Wind Speed: " + data["wind"]["speed"] + " MPH" + "<br>");
        
        // finds the UV Index and color-codes it
        let uvIndex = calcUV(data);
        let uvIndexEl = $("<span>").attr("type", "span").text(uvIndex);
        uvColor(uvIndex, uvIndexEl); // adds the correct color to the UV index
        cityWeatherList.append("UV Index: ");
        cityWeatherList.append(uvIndexEl.get(0));

        // adds the city header and its current weather data to the main dash
        dash.append(cityName);
        dash.append(cityWeatherList);
    }

    // calculates the UV Index
    function calcUV(data) {
        let uvIndex;
        let lat = data["coord"]["lat"];
        let lon = data["coord"]["lon"];
        $.ajax({
            type: "GET",
            url: `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
            datatype: "json",
            async: false,
            success: function(response) {
                uvIndex = response["value"];
            }
        })
        return(uvIndex);
    }

    // Picks the correct color for the UV Index
    function uvColor(uvIndex, uvIndexEl) {
        uvIndexEl.css("padding", "5px");
        uvIndexEl.css("border-radius", "5px");
        if (uvIndex < 3) {
            uvIndexEl.css("background-color", "green");
            uvIndexEl.css("color", "white");
        }
        if (uvIndex > 3 && uvIndex < 6) {
            uvIndexEl.css("background-color", "yellow");
        }
        if (uvIndex > 6 && uvIndex < 8) {
            uvIndexEl.css("background-color", "orange");
        }
        if (uvIndex > 8 && uvIndex < 11) {
            uvIndexEl.css("background-color", "red");
            uvIndexEl.css("color", "white");
        }
        if (uvIndex > 11) {
            uvIndexEl.css("background-color", "violet");
            uvIndexEl.css("color", "white");
        }
    }

    function weatherCard(data) {
        let weeklyWeather = $("#week");
        weeklyWeather.text("");
        $("#subhead").text("5-Day Forecast:");

        // creates each weather card for the next 5 days
        for (var i = 1; i < 41; i++) {
            if (i % 8 == 0) {
                var dayCard = $("<div>").addClass("day col-12 col-md-2").attr("type", "div");
                var dayWeather = data["list"][i];
                var dayNum = moment().add(i/8 * 1, 'days').format('l');

                dayCard.append($("<h4>").text(dayNum).attr("type", "h4"));
                
                // appends weather image to the day card
                let iconURL =  "https://openweathermap.org/img/w/" + dayWeather["weather"][0]["icon"] + ".png";
                let weatherIcon = $("<img alt='weather image'>").attr("src", iconURL);
                dayCard.append(weatherIcon);

                dayCard.append($("<p>").text("Temp: " + dayWeather["main"]["temp"] +  " °F").attr("type", "p"));
                dayCard.append($("<p>").text("Humidity: " + dayWeather["main"]["humidity"] + "%").attr("type", "p"));

                // adds each day card to the overall 5-day forecast
                weeklyWeather.append(dayCard).addClass("row");
            }
        }
    }

    // makes the city buttons function to the correct city weather
    function cityBtnFunc(event) {
        event.preventDefault();
        searchCityWeather($(this).val());
    }
})