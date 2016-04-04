## APIs day 2

4/4/16

---

We've now gone over the fundamentals of JSON (and XML and CSV), now to spend a little more time looking at APIs.

##### Data sources:

* **Wordnik**: [http://developer.wordnik.com/](http://developer.wordnik.com/)

* **OpenWeatherMap**: [http://openweathermap.org/api](http://openweathermap.org/api)

* **Giphy**: [https://api.giphy.com/](https://api.giphy.com/)

* **ConceptNet**: [http://conceptnet5.media.mit.edu/](http://conceptnet5.media.mit.edu/)

* **Dariusk's Corpora**: [https://github.com/dariusk/corpora](https://github.com/dariusk/corpora) (not actually an API, just fun data from last week)

* "**awesome public datasets**": [https://github.com/caesar0301/awesome-public-datasets](https://github.com/caesar0301/awesome-public-datasets)

* **NYTimes**: [http://developer.nytimes.com/](http://developer.nytimes.com/)

* **Instagram**: [https://www.instagram.com/developer/](https://www.instagram.com/developer/)

* **Unofficial Wikipedia API**: [http://www.programmableweb.com/api/wikipedia](http://www.programmableweb.com/api/wikipedia)

Check out all the examples from in class and play with them (you'll need to plug in your own API key in each one) - modify them to do something else besides what we did in class. Get comfortable loading different types of data from the same JSON object. 

#### 01-weather

This example uses openweathermap.org.

We first create a bunch of global variables to hold our API request URI:

```
var weatherJSON;
var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var queryCity = 'New York';
var units = '&units=imperial';
var apiID = '&appid={your api key here}';
```

as well as a few other variables to point to HTML elements (input, title, descr, temp).

In setup we put together the complete API query by adding urlBase + queryCity + units + apiID, then using ```select()``` to access the HTML elements we've created in the index.html file, also creating the 3 HTML elements that will say our city name (title), weather description (descr) and temperature (temp) with empty strings (""). We also set a callback to ```weatherAsk()``` via the button HTML element.

WeatherAsk looks like this: 

```
function weatherAsk() {
  var url = urlBase + input.value() + units + apiID;
  queryCity = input.value();
  loadJSON(url, gotData);
}
```
We combine the API url again, and change the queryCity to the value of the input box. This is when we loadJSON with a callback to gotData, which looks like this:

```
function gotData(data) {
  weatherJSON = data;
  
  title.html(weatherJSON.name);
  descr.html(weatherJSON.weather[0].description);
  descr.html(weatherJSON.main.temp + " degrees fahrenheit");
}
```

This changes the text of the HTML elements based on the results of the call.


#### 02-wordnik

#### 02a-wordnik

#### 03-giphy