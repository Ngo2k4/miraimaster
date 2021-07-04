const fs = require("fs");
module.exports.config = {
name: "lyly",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "lyly",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lyly")==0 || (event.body.indexOf("lyly")==0)) {
		var msg = {
				body: "nhạc hay Lời Đường Mật",
				attachment: fs.createReadStream(__dirname + `/noprefix/yt1s.com - LỜI ĐƯỜNG MẬT LYLY ft HIEUTHUHAI Remix.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
		
		}

	module.exports.run = function({ api, event, client, __GLOBAL }) {

}