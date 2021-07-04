module.exports.config = {
	name: "adminbot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lax",
	description: "xem thông tin chủ bot",
	commandCategory: "video",
	usages: "adminbot",
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
 var callback = () => api.sendMessage({body:`梁Chủ bot梁\n👀 Tên: Lê Phước Toàn\n👤 😶 Giới tính: Nam\n🐶 Username: IamShiin.Info\nMomo: 0834270645`,
      attachment: fs.createReadStream(__dirname + "/cache/hi.mp4")
    }, event.threadID);
 return callback()
}
