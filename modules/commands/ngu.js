const fs = require("fs");
module.exports.config = {
	name: "Ngu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Ngu",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
				body: "Đúng, địt mẹ nó ngu chết mẹ luôn 🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}