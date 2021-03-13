$(document).ready(function () {
    var API_KEY = "48d3bee5ac7cdd8e92b4de30d8718eca";
    var listEl = $("#cityList");

    // saves the city in local storage and generates a list of searched cities
    $("#searchBtn").on("click", function(i) {
        let city = $("#city").val();
        searchCityWeather(city);
    })

    function searchCityWeather(city) {     
        // gets the current weather
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
            datatype: "json",
            success: function(data) {
                console.log(data); // DELETE THIS LATER
                
                // for (var i = 0; i < listEl.size(); i++) {
                    // if (listEl[i[1]] != searchCityWeather(city)) {
                        let cityBtn = $("<button>").text(city).attr("type", "button");
                        listEl.prepend(cityBtn);
                        localStorage.setItem("cityBtn", "searchCityWeather(city)");
                    // }
                // }
                cityCard(data);

                // gets the weather for the 5 day forecast
                $.ajax({
                    type: "GET",
                    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`, 
                    datatype: "json",
                    success: function(data) {
                        console.log(data);
                        weatherCard(data);
                    }
                })
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                alert("Please type in a real location.")
            }
        })
    }

    function cityCard(data) {
        let dash = $("#cityDash").addClass("cityDash");
        dash.text(""); // empties the dash between each searched city
        // creates the city header
        let cityName = $("<h2>").text(data["name"] + " ").attr("type", "h2");
        cityName.append(moment().format('l'));
        cityName.append(data["cloud"]); // NEED TO FIGURE OUT EMOJI!!!

        // creates the list for the city
        let cityWeatherList = $("<p>").attr("type", "p").css("font-size", "20px");
        cityWeatherList.append(("Temperature: " + data["main"]["temp"] + " °F" + "<br>"));
        cityWeatherList.append("Humdity: " + data["main"]["humidity"] + "%" + "<br>");
        cityWeatherList.append("Wind Speed: " + data["wind"]["speed"] + " MPH" + "<br>");
        // let uvIndex = data[].uvIndex.addClass("uvIndexBox");
        // cityWeatherList.append("UV Index: " + uvIndex);

        // adds the city header and its current weather data to the main dash
        dash.append(cityName);
        dash.append(cityWeatherList);
    }

    function weatherCard(data) {
        let weeklyWeather = $("#week");
        weeklyWeather.text("");
        $("#subhead").text("5-Day Forecast:");

        // creates each weather card for the next 5 days
        for (var i = 0; i < 40; i++) {
            if (i % 8 == 0) {
                var dayCard = $("<div>").addClass("day col-12 col-md-2").attr("type", "div");
                var dayWeather = data["list"][i];
                var dayNum = moment().add(i/8 * 1, 'days').format('l');

                dayCard.append($("<h4>").text(dayNum).attr("type", "h4"));
                // dayCard.append(emoji);
                dayCard.append($("<p>").text("Temp: " + dayWeather["main"]["temp"] +  " °F").attr("type", "p"));
                dayCard.append($("<p>").text("Humidity: " + dayWeather["main"]["humidity"] + "%").attr("type", "p"));

                // adds each day card to the overall 5-day forecast
                weeklyWeather.append(dayCard).addClass("row");
            }
        }
    }
})