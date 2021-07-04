const fs = require("fs");
module.exports.config = {
	name: "Vcl",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "vcl",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vcl")==0 || (event.body.indexOf("Vcl")==0)) {
		var msg = {
				body: "vãi cả lồn :>",
 				attachment: fs.createReadStream(__dirname + `/noprefix/vcl.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}