const fs = require("fs");
module.exports.config = {
name: "ctcht",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ctcht",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ctcht")==0 || (event.body.indexOf("Ctcht")==0)) {
		var msg = {
				body: "Chúng Ta Của Hiện Tại-Sếp",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - CHÚNG TA CỦA HIỆN TẠI  SƠN TÙNG MTP LOFI VERSION LYRICS.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}