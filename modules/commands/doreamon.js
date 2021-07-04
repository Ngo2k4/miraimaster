module.exports.config = {
	name: "doreamon",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lax",
	description: "Gui video",
	commandCategory: "video",
	usages: "doreamon",
	cooldowns: 5
};


module.exports.run = async ({ api, event ,Threads ,Users}) => {

var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])

	var fs = require('fs')
	let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
 var callback = () => api.sendMessage({body:`Anh thích em lắm đó <3`,
      attachment: fs.createReadStream(__dirname + "/cache/chidz.mp4")
    }, event.threadID);
 return callback()
}
