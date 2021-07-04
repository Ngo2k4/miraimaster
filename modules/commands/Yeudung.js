const fs = require("fs");
module.exports.config = {
name: "Yêu dũng",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Yêu dũng",
	commandCategory: "System",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu dũng")==0 || (event.body.indexOf("Yêu dũng")==0)) {
		var msg = {
				body: "Yêu Dũng nhất :3 \nYêu vlon luôn❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/cak.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}