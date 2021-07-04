const fs = require("fs");
module.exports.config = {
name: "Sơn-tùng",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Sơn-tùng",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sơn-tùng")==0 || (event.body.indexOf("sơn-tùng")==0)) {
		var msg = {
				body: "Nhạc của Sếp",
				attachment: fs.createReadStream(__dirname +  `/noprefix/zzz.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}