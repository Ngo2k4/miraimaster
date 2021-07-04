const fs = require("fs");
module.exports.config = {
name: "htca",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "htca",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("htca")==0 || (event.body.indexOf("Htca")==0)) {
		var msg = {
				body: "Hãy Trao Cho Anh-Sếp",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - Son Tung  Hay Trao Cho Anh Vietnamese Lyrics with English Translation.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}