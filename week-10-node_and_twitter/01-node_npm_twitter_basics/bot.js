var Twit = require('twit');



var config = require('./config');
var T = new Twit(config);

console.log('The bot is starting');

//kinds of commands to send to twitter API:
// - get() - search by ... hashtag/location/user/etc.
// - post() - tweet
// - stream() - assign events to the stream - like any time somebody @ mentions, the stream triggers an event.






// 
//  search twitter for all tweets containing the word 'banana' since July 11, 2011 
// 
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//   console.log(data);
// });

//rewritten version
// var params = {
// q: '@whoisbma',
// count: 20
// };

// var gotData = function(err, data, response) {
// // console.log(data);
// var tweets = data.statuses;
// for (var i = 0; i < tweets.length; i++) {
//		console.log(tweets[i].text + "\n");
// }
// };

// T.get('search/tweets', params, gotData);


//  tweet 'hello world!' 

var tweet = {
	status: "la la la la la"
};

function tweeted(err, data, response) {
	if (err) {
		console.log("Something went wrong!");
		console.log(err);
	} else {
		console.log("It worked!");
		// console.log(data);
	}
}

T.post('statuses/update', tweet, tweeted);

// for (var i = 0; i < 5; i++) {
//	var countTweet = {
//		status: "tweet number " + i
//	};
//	T.post('statuses/update', countTweet, tweeted);
// }
