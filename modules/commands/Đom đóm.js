const fs = require("fs");
module.exports.config = {
name: "đom đóm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "đom đóm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đom đóm")==0 || (event.body.indexOf("Đom đóm")==0)) {
		var msg = {
				body: "J97",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - ĐOM ĐÓM   JACK  VIDEO LYRIC HD ĐOMĐÓM.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}