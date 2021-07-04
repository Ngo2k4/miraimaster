module.exports.config = {
	name: "",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "System",
	usages: "uptime",
	cooldowns: 5
};


module.exports.run = async ({ api, event ,Threads ,Users}) => {
var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])
	var fs = require('fs')
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	         const timeStart = Date.now();
 var callback = () => api.sendMessage({body:`Bot đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây <3\n\nSố nhóm: ${boxget.length}\nSố người dùng: ${userget.length}`,
      attachment: fs.createReadStream(__dirname + "/cache/duyne.jpg")
    }, event.threadID);
 return callback()
}
