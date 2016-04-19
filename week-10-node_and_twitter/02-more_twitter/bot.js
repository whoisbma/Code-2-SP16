var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

postTweet();
//post a tweet every 20 seconds
setInterval(postTweet, 20000);

function postTweet() {
	var r = Math.floor(Math.random() * 100);

	var tweet = {
		status: "this is my number: " + r
	};

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Error: ");
			console.log(err);
		} else {
			console.log("Success");
		}
	}
}