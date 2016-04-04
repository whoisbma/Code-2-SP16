var weather;
// var bigUrl = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=4cb71779d10c5322e9c1dbd47ff053cd';

var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var queryCity = 'New York';
var units = '&units=imperial';
var apiID = '&appid=4cb71779d10c5322e9c1dbd47ff053cd';


var input;

function setup() {
  createCanvas(400,200);
  // loadJSON(bigUrl, gotData);
  // loadJSON(urlBase + queryCity + '&' + units + '&' + apiID, gotData);
  
  var url = urlBase + queryCity + units + apiID;
  loadJSON(url, gotData);
  
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');
}

function weatherAsk() {
  var url = urlBase + input.value() + units + apiID;
  queryCity = input.value();
  console.log(url);
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
  console.log(weather.main.temp);
  console.log(weather.main.humidity);
}

function draw() {
  background(0);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    ellipse(100,100,temp,temp);
    ellipse(300,100,humidity,humidity);
  }
}

//javascript functions:
//setTimeout - trigger an event once at ___ ms
//setInterval - trigger an event every ___ ms

  // setInterval(weatherAsk, 1000); //in setup