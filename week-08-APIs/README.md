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

This sketch by Daniel Shiffman looks for a starting word, and creates a link/anchor on the page with the contents of that word. Clicking on it will take the user to one of many potential related words by looking at the related words API result, getting a random result, and updating the link html.

```
function gotData(data) {
  //this is called by loadJSON.
  //the json object from the api will be put into variable "data"
  var index1 = floor(random(0, data.length));  //data is an array. we want to look at one of the many possible array positions, so we choose a random one:
  var index2 = floor(random(0, data[index1].words.length));
  //finally that array position is an object that may have an array of words, so we choose a random one of those too:
  word = data[index1].words[index2];
  //update the link html element text:
  link.html(word);
}
```

#### 02a-wordnik

This sketch starts with a long string, uses ```setInterval``` to automatically query the API, and replaces words with the results one at a time.

#### 03-giphy

This sketch by Daniel Shiffman gets the results from a giphy gif search.

#### Encoding URIs

[encodeURI() information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) - will remove spaces and fix other problems in URIs.

### Homework

*Due next Sunday, 4/10, at midnight.*

Use an API to make an experimental sketch.

* If you're familiar with APIs, try ConceptNet. If not, base your code on one of the examples.
* You could expand the functionality of one of the examples. Maybe create a weather app that gives you the weather wherever you click your mouse. Maybe something that translates text into themed gifs. Maybe a classical data visualization.
* If you use ConceptNet or Wordnik, try a language-based piece where you play with the meanings of words. Try combining a previous approach with these APIs.

