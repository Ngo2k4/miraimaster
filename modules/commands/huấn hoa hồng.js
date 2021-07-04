const fs = require("fs");
module.exports.config = {
	name: "huấn hoa hồng",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Huấn hoa hồng",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("huấn hoa hống")==0 || (event.body.indexOf("Huấn hoa hồng")==0)) {
		var msg = {
				body: "huấn râu sì",
				attachment: fs.createReadStream(__dirname + `/noprefix/huanhoahong.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}