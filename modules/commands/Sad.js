const fs = require("fs");
module.exports.config = {
name: "Sad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Sad",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("sad")==0)) {
		var msg = {
				body: "Nhạc buồn về tâm trạng ngắn đoạn",
				attachment: fs.createReadStream(__dirname + `/noprefix/ccc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}