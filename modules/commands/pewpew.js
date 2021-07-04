const fs = require("fs");
module.exports.config = {
	name: "pewpew",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Pewpew",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pewpew")==0 || (event.body.indexOf("Pewpew")==0)) {
		var msg = {
				body: "chill xíu nhé ",
				attachment: fs.createReadStream(__dirname + `/noprefix/pewpew.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}