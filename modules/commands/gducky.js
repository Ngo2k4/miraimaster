const fs = require("fs");
module.exports.config = {
	name: "gducky",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Gducky",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gducky")==0 || (event.body.indexOf("Gducky")==0)) {
		var msg = {
				body: "chú vịt vàng ",
				attachment: fs.createReadStream(__dirname + `/noprefix/gducky.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}