const fs = require("fs");
module.exports.config =	{
	name: "",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Bùm",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bùm")==0 || (event.body.indexOf("Bùm")==0)) {
		var msg = {
				body: "Djt me con chó, chờ đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/bắn.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}