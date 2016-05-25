var apiKey = "=e0c3d32e86b53627e0515aefe68711a3";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is" + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid' + apiKey, function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: The GET request has been made.");
  });
});
