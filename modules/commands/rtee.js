const fs = require("fs");
module.exports.config = {
name: "R tee",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "r tee",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("r tee")==0 || (event.body.indexOf("R tee")==0)) {
		var msg = {
				body: " NHÀ BAO VIỆC ",
				attachment: fs.createReadStream(__dirname + `/noprefix/rtee.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}