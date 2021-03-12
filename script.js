$(document).ready(function () {
    var API_KEY = "48d3bee5ac7cdd8e92b4de30d8718eca";
    var listEl = $("#cityList");

    $("#searchBtn").on("click", function() {
        // let city = $("#city").val();
        // searchCityWeather(city);
    })

    function searchCityWeather(city) {
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`,
            
            datatype: "json",
            success: function(data) {
                console.log(data);
                // cityCard(city);
                // weatherCard(city);
                // listEl.append(city);
            }
        })
    }

    function cityCard(city) {
        // creates the city header
        let cityName = city.name.addClass("h2").val(cityName).attr("type", "button");
        cityName.append(date); // moment JS?
        cityName.append(weather emoji);

        // creates the list for the city
        let cityWeatherList = $("<li>").addClass("li").attr("type", "li").css("text-decoration", "none");
        cityWeatherList.append("Temperature: " + city.temp) + " F";
        cityWeatherList.append("Humdity: " + city.humid + "%");
        cityWeatherList.append("Wind Speed: " + city.wind + " MPH");
        let uvIndex = city.uvIndex.addClass("uvIndexBox");
        cityWeatherList.append("UV Index: " + uvIndex);

        // adds the city header and its current weather data to the main dash
        let dash = $("#cityDash").addClass("border: solid; border-color: grey");
        dash.append(cityName);
        dash.append(cityWeatherList);
    }

    function weatherCard(city) {

    }

searchCityWeather("chicago");
})