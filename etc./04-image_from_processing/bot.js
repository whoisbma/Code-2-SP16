

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//require child process for triggering script for processing
var exec = require('child_process').exec;

//file system
var fs = require('fs');

postTweet();
// setInterval(postTweet, 1000 * 60);

function postTweet() {
	var cmd = "processing-java --sketch=`pwd`/noiseLandscape --run";
	
	exec(cmd, processing);	// execute child process (processing on command line)
	
	function processing() {
		var filename = 'noiseLandscape/output.png';
		var params = {
			encoding: 'base64'
		};
		var b64content = fs.readFileSync(filename, params);
		console.log('finished generating/reading file');
		var media = {
			media_data: b64content
		};
		T.post('media/upload', media, uploaded);


		function uploaded(err, data, response) {
			//we'll actually tweet in this callback instead of just reporting errors or whatever
			var mediaID = data.media_id_string;
			var tweetParams = {
				// status: 'grey landscape',
				media_ids: [mediaID]
			};
			T.post('statuses/update', tweetParams, tweeted);
			if (err) {
				console.log("Error: ");
				console.log(err);
			} else {
				console.log("Success");
			}
		}

		function tweeted(err, data, response) {
			if (err) {
				console.log("Error: ");
				console.log(err);
			} else {
				console.log("Success");
			}
		}
	}
}