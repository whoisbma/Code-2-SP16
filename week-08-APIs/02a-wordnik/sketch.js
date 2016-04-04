//bma- code 2 SP 16

var URIbase = "http://api.wordnik.com/v4/word.json/";
var URIword = "";
var URIquery = "/relatedWords?useCanonical=false&limitPerRelationshipType=25&";
var apiKey = "api_key={your key here}";

var theText = "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.";

var whichWord;
var textArray;
var poem;

function setup() {
	noCanvas();
	poem = createP(theText);
	setInterval(askWordnik,1000);
}

function askWordnik() {
	textArray = splitTokens(theText);
	// console.log(textArray);
	whichWord = floor(random(textArray.length));
	URIword = textArray[whichWord];
	loadJSON(URIbase + URIword + URIquery + apiKey, gotData);
	// console.log(URIword);
}

function gotData(data) {
	var index1 = floor(random(data.length));
	var index2 = floor(random(data[index1].words.length));

	if (data[index1].words[index2] !== undefined) {
		var newWord = data[index1].words[index2];

		textArray[whichWord] = newWord;
		poem.html(textArray.join(" "));
	}
}

function draw() {


}