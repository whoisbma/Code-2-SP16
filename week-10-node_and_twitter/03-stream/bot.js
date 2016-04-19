var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//set up a user stream
var stream = T.stream('user');

//any time someone follows me, call followed()
stream.on('follow', followed);

function followed(eventMsg) {
	console.log("follow event: ");
	var name = eventMsg.source.name;
	console.log(name);
	var screenName = eventMsg.source.screen_name;
	console.log(screenName);
	postTweet("hi @" + screenName);

}


function postTweet(content) {

	var tweet = {
		status: content
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