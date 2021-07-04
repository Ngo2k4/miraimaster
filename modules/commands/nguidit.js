module.exports.config = {
    name: "ngửi đít",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dungkon",
    description: "ngửi đít 1 Ai Đó",
    commandCategory: "Games",
    usages: "ngửi đít [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "nguidit.png")) request("https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/193503687_168925391869372_5182417070720208965_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ouuR7e_dqswAX87cEYZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=b28d311b508de384c4d6b16c1f5f8496&oe=60C9FDC0").pipe(fs.createWriteStream(dirMaterial + "nguidit.png"));
}

async function makeImage({ one, two }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let choigai_image = await jimp.read(__root + "/nguidit.png");
    let pathImg = __root + `/nguidit_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    choigai_image.composite(circleOne.resize(110, 110), 730, 230).composite(circleTwo.resize(110, 110), 545, 205);
    
    
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
        return makeImage({ one, two }).then(path => api.sendMessage({ body: " ngửi đít tao đi, thơm khônggg 😗" + tag + '',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}