const fs = require("fs");
module.exports.config = {
name: "Mck",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dungkon",
	description: "mck",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mck")==0 || (event.body.indexOf("Mck")==0)) {
		var msg = {
				body: " GIÀU VÌ BẠN SANG VÌ VỢ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/mck.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}