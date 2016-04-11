console.log("The replier bot is starting");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//set up a user stream
var stream = T.stream('user');

//any time someone follows me, call followed()
// stream.on('follow', followed);

// function followed(eventMsg) {
//	console.log("follow event: ");
//	var name = eventMsg.source.name;
//	console.log(name);
//	var screenName = eventMsg.source.screen_name;
//	console.log(screenName);
//	postTweet("hi @" + screenName);

// }

//any time someone tweets me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	console.log("Tweet event...");

	// for looking manually at a file of the result
	// var fs = require('fs');
	// var json = JSON.stringify(eventMsg, null, 2);
	// fs.writeFile("tweet.json", json);

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;

	var splitText = text.split(" ");
	splitText.splice(0,1);
	var joinedText = splitText.join(" ");

	console.log(replyto + ' ' + from);

	if (replyto === 'tweeverb') {
		var newtweet = '@' + from + ' - "' + joinedText + '"... ORLY?';
		postTweet(newtweet);
	}
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