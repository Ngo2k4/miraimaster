module.exports.config = {
    name: "damma",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dungkon",
    description: "",
    commandCategory: "Games",
    usages: "damma [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "damma.png")) request("https://scontent.xx.fbcdn.net/v/t1.15752-9/187609732_325235105669112_8898051559898745528_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=_4EYNZ1oBIkAX88S3Dk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=fbf028ad838a73862e94b17b2080a0ac&oe=60D9B3E0").pipe(fs.createWriteStream(dirMaterial + "damma.png"));
}

async function makeImage({ one }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bopvu_image = await jimp.read(__root + "/damma.png");
    let pathImg = __root + `/damma_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    bopvu_image.composite(circleOne.resize(95, 95), 110, 295);
    
    let raw = await bopvu_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = mention[0];
        return makeImage({ one }).then(path => api.sendMessage({ body: " mong " + event.mentions[mention[0]].replace(/@/g, "") +"\n về nơi an nghỉ cuối cùng  ", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}