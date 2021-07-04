module.exports.config = {
    name: "bopcu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dungkon",
    description: "",
    commandCategory: "Games",
    usages: "bopcu [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bopcu.png")) request("https://scontent.xx.fbcdn.net/v/t1.15752-9/191278324_1693070090876264_808306997521723192_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BiIjTxoPJS8AX9r34tW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0111f339626a3f4c6db28937a8acdac8&oe=60D8C8DC").pipe(fs.createWriteStream(dirMaterial + "bopcu.png"));
}

async function makeImage({ one }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bopvu_image = await jimp.read(__root + "/bopcu.png");
    let pathImg = __root + `/bopcu_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    bopvu_image.composite(circleOne.resize(55, 55), 35, 60);
    
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
        return makeImage({ one }).then(path => api.sendMessage({ body: "Ôi 🥰\n" + event.mentions[mention[0]].replace(/@/g, "") +"\ncặc anh to quá em muốn bóp cặc anh 🤫", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}