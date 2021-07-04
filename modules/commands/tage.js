const fs = require("fs");
module.exports.config = {
name: "Tage",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dungkon",
	description: "tage",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tage")==0 || (event.body.indexOf("Tage")==0)) {
		var msg = {
				body: " LỚP 13 ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tage.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}