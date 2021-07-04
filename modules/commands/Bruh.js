const fs = require("fs");
module.exports.config = {
name: "Bruh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Bruh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bruh")==0 || (event.body.indexOf("Bruh")==0)) {
		var msg = {
				body: "bủh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}