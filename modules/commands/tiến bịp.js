const fs = require("fs");
module.exports.config = {
	name: "tiến bịp",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Tiến bịp",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tiến bịp")==0 || (event.body.indexOf("Tiến bịp")==0)) {
		var msg = {
				body: "còn cái nịt, còn đúng cái nịt thôi... ",
				attachment: fs.createReadStream(__dirname + `/noprefix/tienbip.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}