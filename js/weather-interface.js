var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid' + apiKey, function(response){
        $('.showWeather2').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
    });
  });
});
