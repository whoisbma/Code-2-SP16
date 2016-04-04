//by daniel shiffman

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key={your api key here}";
var query = "&q=doge";


function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}