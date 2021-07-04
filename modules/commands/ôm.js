module.exports.config = {
    name: "ôm",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MewMew",
    description: "",
    commandCategory: "general",
    usages: "ôm [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = async() => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "om.png")) {
    	var { data } = await axios.get("https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/191655674_300352188474464_8584157511247540459_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=DauIdsxhao8AX_Z2Kri&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=695cb12dd8358c8c9753f2e3d28afe77&oe=60E69C3F", { responseType: "arraybuffer" });
    	fs.writeFileSync(dirMaterial + "om.png");
    };
}

async function makeImage({ one, two }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let slap_image = await jimp.read(__root + "/om.png");
    let pathImg = __root + `/slap_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    slap_image.composite(circleOne.resize(120, 120), 300, 440).composite(circleTwo.resize(120, 120), 180, 450);
    
    let raw = await slap_image.getBufferAsync("image/png");
    
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
    var mention = Object.keys(event.mentions);
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: " ôm 1 cái nhé <3 ", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
