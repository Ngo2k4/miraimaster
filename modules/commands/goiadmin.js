const fs = require("fs");
module.exports.config = {
name: "Gọi admin đẹp trai ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Gọi admin",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@[!] Nguyễn Đinh Tiến Dũng")==0 || (event.body.indexOf("@Nguyễn Đinh Tiến Dũng")==0) || (event.body.indexOf("anh dũng")==0) ||
(event.body.indexOf("Anh dũng")==0) ||
(event.body.indexOf("Dũng")==0) ||
(event.body.indexOf("dũng")==0)) {
  var msg = {
    body: "Gọi admin tao làm con cặc gì 🙂, yêu không mà gọi, đi ngủ rồi, gọi nữa tao xiên chết mẹ mày 🙂", 
   attachment: fs.createReadStream(__dirname + `/noprefix/xien.jpg`)
  }
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}