var weatherJSON;
var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var queryCity = 'New York';
var units = '&units=imperial';
var apiID = '&appid={your api key here}';

var input;

var title;
var descr;
var temp;

function setup() {
  noCanvas();
  var url = urlBase + queryCity + units + apiID;

  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');

  title = createElement('h1', "");
  descr = createP("");
  temp = createP("");
}

function weatherAsk() {
  var url = urlBase + input.value() + units + apiID;
  queryCity = input.value();
  // console.log(url);
  loadJSON(url, gotData);
}

function gotData(data) {
  weatherJSON = data;
  
  title.html(weatherJSON.name);
  descr.html(weatherJSON.weather[0].description);
  descr.html(weatherJSON.main.temp + " degrees fahrenheit");
}

function draw() {

}