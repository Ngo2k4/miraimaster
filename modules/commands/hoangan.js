const fs = require("fs");
module.exports.config = {
name: "Hoàng an",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "hoàng an",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hoàng an")==0 || (event.body.indexOf("Hoàng an")==0)) {
		var msg = {
				body: " sài sòn đêm nay còn mưa không ",
				attachment: fs.createReadStream(__dirname + `/noprefix/hoanganh.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}