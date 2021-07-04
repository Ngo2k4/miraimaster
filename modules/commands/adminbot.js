module.exports.config = {
    name: "adminbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dangkhoa",
    description: "Thông tin về admin",
    commandCategory: "Admin",
    usages: "adminbot",
    cooldowns: 5,
    dependencies: ["request"],
};

module.exports.run = ({ api, event, args }) => {
    const request = require("request");
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Admin Bot Này★彡\n𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Nguyễn Đinh Tiến Dũng\n𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉 : Dũng Kon, Khoái Da ~~\n𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Nhà Mặt Phố Bố Làm To Slogen Nhà Em Đầy Tiền\nI Have Something To You\nI Love You\n𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Vui vẻ nhưng đôi lúc hơi khó tính\n𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼 : 1m84\n𝑺𝒊𝒏𝒉 𝑵𝒈𝒂̀𝒚 : 01/04/200x\n𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ :0367281079\nSTK-VCB: 1016475889\n𝑰𝒏𝒔𝒕𝒂𝒓𝒈𝒓𝒂𝒎 : không dùng\n𝒀𝒐𝒖𝒕𝒖𝒃𝒆 : Dũng Kon hmm\n𝑺𝒐̛̉ 𝑻𝒉𝒊́𝒄𝒉 : Chơi Game\n𝑪𝒂̂𝒏 𝑵𝒂̣̆𝒏𝒈 : 1 ẩn số\n𝐈𝐃 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 100040705111269 \n𝗡𝗮𝗺𝗲 𝗜𝗗 : Nguyễn Đinh Tiến Dũng \n𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://www.facebook.com/dungkon2002/\n𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Nguyễn Đinh Tiến Dũng ===`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        var codeData = JSON.parse(body);
        if (codeData.error == true) return api.sendMessage(getText('cantFindHentai'), threadID, messageID);
        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters == '') characters = 'Original';
        api.sendMessage(`» Tên: ${title}\n» Tác giả: ${artists}\n» Nhân vật: ${characters}\n» Tags: ${tags}\n» Liên kết: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}