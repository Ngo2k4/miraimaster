const fs = require("fs");
module.exports.config = {
	name: "dark",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "dark",
    cooldowns: 5, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils }) => {
if (event.body.indexOf("dảk")==0 || (event.body.indexOf("Dark")==0)) {
		return api.sendMessage(`Đĩ mẹ mày thích dark không con Đog` , event.threadID, event.messageID)
		}
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {
}
