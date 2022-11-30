const AWS = require('aws-sdk')
const Fs = require('fs')

const Polly = new AWS.Polly({
	accessKeyId: 'AKIAVUGLAN3DRKVZIVES',
	secretAccessKey: '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',
	signatureVersion: 'v4',
	region: 'us-east-1'
});


const input = {
	Text: "Hello, this is a test for temperature records",
	OutputFormat: "mp3",
	VoiceId: "Joanna",
}

Polly.synthesizeSpeech(input, (err, data) => {
	if (err) {
		console.log(err);
	} 
	else if (data) {
		Fs.writeFile("./temperature.mp3", data.AudioStream, function(err) {
			if (err) {
				return console.log(err)
			}
			console.log("temperature.mp3 file was saved!")
		})
	}
});
