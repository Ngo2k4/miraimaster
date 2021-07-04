module.exports.config = {
	name: "ghep",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Ghép đôi với những người trong nhóm",
	commandCategory: "roleplay",
	usages: "ghep",
	cooldowns: 5,
	dependencies: ["axios","fs-extra"]
}

module.exports.run = async ({ event, api }) => {
    const axios = require("axios");
    const { writeFileSync, createReadStream } = require("fs-extra");
    const { threadID, messageID, senderID } = event;

    Array.prototype.random = function () { return this[Math.floor((Math.random()*this.length))]; };

    async function getDataThread(threadID) {
        try {
            var threadInfo = await api.getThreadInfo(threadID);
            return threadInfo.participantIDs.filter(item => item != api.getCurrentUserID() || item != senderID);
        }
        catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy thông tin của nhóm!", threadID, messageID);
        }
    }

    async function getUserInfo(userID) {
        try {
            const userInfo = await api.getUserInfo(userID);
            return { name: userInfo[userID].name, gender: userInfo[userID].gender };
        }
        catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy thông tin của người dùng!", threadID, messageID);
        }
    }

    async function getAvatarUser(userID) {
        try {
            const avatar = (await axios.get( `https://graph.facebook.com/${userID}/picture?width=512&height=512&access_token=170918394587449|sONjQBBNs316xVD31T-yuL4jfyc`, { responseType: "arraybuffer" } )).data;
            writeFileSync( __dirname + `/cache/${userID}.png`, Buffer.from(avatar, "utf-8") );
            return createReadStream(__dirname + `/cache/${userID}.png`);
        }
         catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy ảnh đại diện của người dùng!", threadID, messageID);
        }
    }

    const emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍"].random();

    try {   
        const threadInfo = await getDataThread(threadID);
        const userIDRandom = threadInfo[Math.floor(Math.random() * threadInfo.length)];

        const userData = await getUserInfo(senderID);
        const userDataRandom = await getUserInfo(userIDRandom);

        
        const avatarPath = await getAvatarUser(senderID);
        const avatarPathRandom = await getAvatarUser(userIDRandom);

        api.changeNickname(`${(userData.gender == 1) ? "Ty của" : (userData.gender == 2) ? "Ty của" : "Bêđê"} ${userData.name} ${emoji}`, threadID, userIDRandom);
        api.changeNickname(`${(userData.gender == 1) ? "Ty của" : (userData.gender == 2) ? "Ty của" : "Bêđê"} ${userDataRandom.name} ${emoji}`, threadID, senderID);
    
        return api.sendMessage({
            body: `Hai bạn đã đính hôn thành công\n\n  ${emoji} ${userData.name} - ${userDataRandom.name} ${emoji}`,
            mentions: [{ tag: userData.name, id: senderID }, {tag: userDataRandom.name, id: userIDRandom}],
            attachment: [avatarPath, avatarPathRandom],
        }, threadID, messageID);
    }
    catch (e) {
        console.log(e);
        return api.sendMessage("Không thể ghép đôi do module đã xảy ra lỗi!", threadID, messageID);
    }
}