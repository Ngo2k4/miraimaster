const fs = require("fs");
module.exports.config = {
name: "Tlinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dungkon",
	description: "tlinh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tlinh")==0 || (event.body.indexOf("Tlinh")==0)) {
		var msg = {
				body: " CHÚ CHÓ TRÊN ÔTÔ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tlinh.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}