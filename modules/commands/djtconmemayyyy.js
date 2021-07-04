module.exports.config = {
name: "noprefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Chào",
  commandCategory: "general",
  usages: "hi",
  cooldowns: 5,
};
module.exports.event = async function({ api, event, client, __GLOBAL, Users, Threads}) {
  var { threadID, messageID } = event;
    let name = (await Users.getData(event.senderID)).name || (await api.getUserInfo(event.senderID))[event.senderID].name;
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (event.body=="hi" || (event.body=="Hi")) {
    return out(`Hi ${name}\nChúc bạn ngày mới tốt lành <3`) 
  }
    if (event.body=="admin" || (event.body=="Admin")) {
    return out(`梁Chủ bot梁\n👀 Tên: Lâm Thiên Chí\n👤 😶 Giới tính: Không xác định\n🐶 Username: LamThienChi.Official\nMomo or TSR: 0565697804`)
  }

  if (event.body=="prefix" || (event.body=="Prefix")) {
    return out(`Xin chào, \nPrefix của ChiCute là : ${__GLOBAL.settings.PREFIX}`)
  }
}
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}