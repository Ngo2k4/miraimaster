const fs = require("fs");
module.exports.config = {
name: "Bray",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "bray",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bray")==0 || (event.body.indexOf("Bray")==0)) {
		var msg = {
				body: " XIN ĐỪNG NHẤC MÁY  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/bray.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}