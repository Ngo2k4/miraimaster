const fs = require("fs");
module.exports.config = {
name: "ricky",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ricky",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ricky")==0 || (event.body.indexOf("ricky")==0)) {
		var msg = {
				body: "nhạc Rap Việt",
				attachment: fs.createReadStream(__dirname + `/noprefix/yt1s.com - Ricky Star  Bắc kim thang  Team Binz RAP VIỆT MV Lyrics.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}