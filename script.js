$(document).ready(function () {
    var API_KEY = "48d3bee5ac7cdd8e92b4de30d8718eca";
    var listEl = $("#cityList");

    // saves the city in local storage and generates the city cards
    $("#searchBtn").on("click", function(i) {
        // let city = $("#city").val();
        // let cityBtn = $("<button>").text(city).attr("type", "button");
        // localStorage.setItem(cityBtn, searchCityWeather(city));
    })

    function searchCityWeather(city) {     
        // gets the current weather
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
            datatype: "json",
            success: function(data) {
                console.log(data);
                // cityCard(city);

                // creates the list to of previous searched cities
                // let cityBtn = $("<button>").val(city name).attr("type", "button");
                // listEl.append(cityBtn);
            }
        })
        
        // gets the weather for the 5 day forecast
        // $.ajax({
        //     type: "GET",
        //     URL: `http//:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`,
        //     datatype: "json",
        //     success: function(data) {
        //         console.log(data);
        //         // weatherCard(city);
        //     }
        // })
    }

    // function cityCard(city) {
    //     // creates the city header
    //     let cityName = city.name.addClass("h2").val(cityName).attr("type", "button");
    //     cityName.append(date); // moment JS?
    //     cityName.append(weatherEmoji);

    //     // creates the list for the city
    //     let cityWeatherList = $("<li>").addClass("li").attr("type", "li").css("text-decoration", "none");
    //     cityWeatherList.append("Temperature: " + city.temp) + " F";
    //     cityWeatherList.append("Humdity: " + city.humid + "%");
    //     cityWeatherList.append("Wind Speed: " + city.wind + " MPH");
    //     let uvIndex = city.uvIndex.addClass("uvIndexBox");
    //     cityWeatherList.append("UV Index: " + uvIndex);

    //     // adds the city header and its current weather data to the main dash
    //     let dash = $("#cityDash").addClass("border: solid; border-color: grey");
    //     dash.append(cityName);
    //     dash.append(cityWeatherList);
    // }

    function weatherCard(city) {

    }

    searchCityWeather("chicago");
})