const fs = require("fs");
module.exports.config = {
name: "Quan tài hư",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "quan tài hư",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("quan tài hư")==0 || (event.body.indexOf("Quan tài hư")==0)) {
		var msg = {
				body: "QUAN TÀI HƯ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/quantaihu.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}