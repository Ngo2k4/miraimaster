const fs = require("fs");
module.exports.config = {
	name: "thầy giáo ba",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Thầy giáo ba",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("thầy giáo ba")==0 || (event.body.indexOf("Thầy giáo ba")==0)) {
		var msg = {
				body: "thầy ba ",
				attachment: fs.createReadStream(__dirname + `/noprefix/thaygiaoba.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}