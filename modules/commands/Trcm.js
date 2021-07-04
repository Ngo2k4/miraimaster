const fs = require("fs");
module.exports.config = {
name: "trcm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "trcm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("trcm")==0 || (event.body.indexOf("Trcm")==0)) {
		var msg = {
				body: "Trứng Rán Cần Mỡ-EDM",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - Trứng Rán Cần Mỡ WRC Remix  Tân Trần  Nhạc EDM 8D Tiktok Gây Nghiện Hay Nhất.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}