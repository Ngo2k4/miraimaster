module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HungCho",
  description: "Thay icon nhs chat.",
  commandCategory: "Admin",
  usages: "boxemoji [icon]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const name = args.join(" ")
   let namee = await api.getThreadInfo(name)
  if (!name) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), name, () => api.sendMessage("💦Bot đã rời nhóm " + namee.name, event.threadID, event.messageID));

}