const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "dit",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "địt người bạn tag",
  commandCategory: "hành động",
  usages: "dit [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: ["request","fs"]
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa Tag");
  return request('https://nekos.life/api/v2/img/anal', (err, response, body) => {
    let picData = JSON.parse(body);
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    var mention = Object.keys(event.mentions)[0];
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", Đjt nát loz nhé em iu  😈",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/src/1.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/src/1.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/src/1.${ext}`)).on("close", callback);
  });
}
