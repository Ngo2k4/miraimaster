module.exports.config = {
    name: "bopco",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dungkon",
    description: "bóp cổ 1 Ai Đó",
    commandCategory: "Games",
    usages: "bopco [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bopco.png")) request("https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/197917445_318926719939169_6728372377625447452_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=HMXzmqOBU6QAX-4FVZq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=5a64cfdbec1595775c925fd69262c1a0&oe=60CA55FF").pipe(fs.createWriteStream(dirMaterial + "bopco.png"));
}

async function makeImage({ one, two }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let choigai_image = await jimp.read(__root + "/bopco.png");
    let pathImg = __root + `/bopco_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    choigai_image.composite(circleOne.resize(65, 65), 310, 45).composite(circleTwo.resize(65, 65), 230, 100);
    
    
    let raw = await choigai_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
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
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: " Tao bóp cổ chết đĩ mẹ mày 😗" + tag + '',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}