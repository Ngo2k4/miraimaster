const fs = require("fs");
module.exports.config = {
name: "Đen vâu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "đen vâu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đen vâu")==0 || (event.body.indexOf("Đen vâu")==0)) {
		var msg = {
				body: "VỀ NHÀ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/denvau.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}