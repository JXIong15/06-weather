$(document).ready(function () {
    var API_KEY = "48d3bee5ac7cdd8e92b4de30d8718eca";


    $("#searchBtn").on("click", function() {
        // let city = $("#city").val();
        // searchCityWeather(city);
    })

    function searchCityWeather(city) {
        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
            datatype: "json",
            success: function(data) {
                console.log(data);

            }
        })
    }
searchCityWeather("chicago");
})