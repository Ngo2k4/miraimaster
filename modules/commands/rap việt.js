const fs = require("fs");
module.exports.config = {
	name: "rap việt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Rap việt",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rap việt")==0 || (event.body.indexOf("Rap việt")==0)) {
		var msg = {
				body: "hây hây hây  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/rapviet.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}