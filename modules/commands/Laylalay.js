const fs = require("fs");
module.exports.config = {
name: "laylalay",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "laylalay",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("laylalay")==0 || (event.body.indexOf("Laylalay")==0)) {
		var msg = {
				body: "J97",
				attachment: fs.createReadStream(__dirname + `/noprefix/iii.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}