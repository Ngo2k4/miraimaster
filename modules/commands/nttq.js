const fs = require("fs");
module.exports.config = {
name: "NTTQ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "nttq",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nttq")==0 || (event.body.indexOf("Nttq")==0)) {
		var msg = {
				body: " Trong Trí Nhớ Của Anh ",
				attachment: fs.createReadStream(__dirname + `/noprefix/nttq.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}