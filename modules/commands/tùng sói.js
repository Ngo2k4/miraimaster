const fs = require("fs");
module.exports.config = {
	name: "tùng sói",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Tùng sói",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tùng sói")==0 || (event.body.indexOf("Tùng sói")==0)) {
		var msg = {
				body: " Hôm nay trời đẹp thế nhở, ỏ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tungsoi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}