module['exports']['config'] = {
    name: 'cung',
    version: '0.0.1',
    hasPermssion: 0,
    credits: '...',
    description: 'Xem cung',
    commandCategory: 'Media',
    usages: 'Cung con cak',
    cooldowns: 5,
    dependencies: ['parse-ms', 'axios', 'request'],
    envConfig: {
        cooldownTime: 4,
        rewardCoin: 200
    }
}

module.exports.run = async function ({
    api,
    event,
    args
}) {
    let content = args.join("%20") // 2 dòng cho mod ne :33
    var _0xb2c4 = ["axios"];
    const axios = require(_0xb2c4[0])
    var _0x7e46 = ["https://le31.glitch.me/cung?q=bảo%20bình", "", "get", "data", "threadID", "messageID", "sendMessage"];
    let res = await axios[_0x7e46[2]](encodeURI(`${_0x7e46[0]}${content}${_0x7e46[1]}`));
    return api[_0x7e46[6]](`${_0x7e46[1]}${res[_0x7e46[3]][_0x7e46[3]]}${_0x7e46[1]}`, event[_0x7e46[4]], event[_0x7e46[5]])
}