var settings = {
    "url": "http://api.openweathermap.org/data/2.5/weather?zip=20872,us&appid=dbe9ae8cd45d93fbd15318e4575e9315",
    "method": "GET",
    "timeout": 0,
  };

  let mytemp = 284.8;
  let kelvin = -273;
  var conversion =  1.8 * (mytemp+kelvin) +32 ;
  finalTemp = parseInt(conversion);

  

  $.ajax(settings).done(function (response) {
    console.log(response);
    var content = response.wind.speed;
    $("#windSpeed").append(content);
  });

  $.ajax(settings).done(function (response) {
    console.log(response);
    var content = response.name;
    $("#name").append(content);
  });

  $.ajax(settings).done(function (response) {
    console.log(response);
    var content = response.weather[0].description;
    $("#weather").append(content);
  });

  $.ajax(settings).done(function (response) {
    console.log(response);
    var content = finalTemp;
    $("#temp").append(content);
  });

  $.ajax(settings).done(function (response) {
    console.log(response);
    let unix = response.sys.sunrise;
    let date = new Date(unix*1000);
    var content = date;
    $("#sunrise").append(content);
  });
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    let unix = response.sys.sunset;
    let date = new Date(unix*1000);
    var content = date;
    $("#sunset").append(content);
  });