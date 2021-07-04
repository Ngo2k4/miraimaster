const fs = require("fs");
module.exports.config = {
name: "Yêu huyền",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Yêu huyền",
	commandCategory: "System",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu huyền")==0 || (event.body.indexOf("Yêu huyền")==0)) {
		var msg = {
				body: "Yêu Huyền nhất :3 \nYêu vlon luôn❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/cak.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}