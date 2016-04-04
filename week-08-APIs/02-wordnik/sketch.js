//by daniel shiffman

var url1 = "http://api.wordnik.com/v4/word.json/";
var word = "rainbow";
var url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key={your api key here}";

function setup() {
  noCanvas();
  link = createA('#', word);
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
}

function draw() {
  
}
