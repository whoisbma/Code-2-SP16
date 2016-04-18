var Twit = require('twit');

var config = {
	consumer_key:			"2GtragUytTeIdf1jBiFc77b4T",
	consumer_secret:		"OSUSHLNQ1bGcxsyBwvgiuBshoejl9OjL4MDMeiwbL2qaPyj41K",
	access_token:			"41247960-GEaIVz6A5XWNUkAOLq1212XocXMpD497yee3o2EQC",
	access_token_secret:	"puc2cAiIIXw2q6i7T0CbTj2CBNOfLblcjxjgAv85dMITu",
	timeout_ms:				60*1000,	//optional HTTP request timeout
}

var T = new Twit(config);

console.log(T);