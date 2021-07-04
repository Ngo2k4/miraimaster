const fs = require("fs");
module.exports.config = {
name: "Abala trap",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "abala trap",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("abala trap")==0 || (event.body.indexOf("Abala trap")==0)) {
		var msg = {
				body: "ABALA TRAP",
				attachment: fs.createReadStream(__dirname + `/noprefix/abalatrap.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}