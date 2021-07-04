const fs = require("fs");
module.exports.config = {
	name: "Cua gái",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "cua gái",
    cooldowns: 5, 
};

module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cua gái")==0 || (event.body.indexOf("Cua gái")==0)) {
		var msg = {
				body: " gái con cặc, bố mẹ thì còng lưng nuôi ăn học, Mày lại ở đây yêu với chả đương, gái với chả gú",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}