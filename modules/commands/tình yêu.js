const fs = require("fs");
module.exports.config = {
	name: "tình yêu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Tình yêu",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tình yêu")==0 || (event.body.indexOf("Tình yêu")==0)) {
		var msg = {
				body: "nghe đi rồi thấm ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tinhyeu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}