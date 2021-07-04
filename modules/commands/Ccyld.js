const fs = require("fs");
module.exports.config = {
name: "ccyld",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ccyld",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ccyld")==0 || (event.body.indexOf("Ccyld")==0)) {
		var msg = {
				body: "Có Chắc Yêu Là Đây-Sếp Tùng",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - SƠN TÙNG MTP  CÓ CHẮC YÊU LÀ ĐÂY  OFFICIAL MUSIC VIDEO.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}