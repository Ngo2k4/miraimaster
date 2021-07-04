const axios = require('axios');
const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "lebong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LaxTool",
  description: "Le Bong",
  commandCategory: "random-img",
  usages: "lebong",
  cooldowns: 5,
  dependencies: ["axios","fs","request"]
};

module.exports.run = function({api,event,args,client,__GLOBAL
}) {
  	var request = require("request");
var options = {
  'method': 'GET',
  'url': 'http://apivuduchoang.duchoangit.com/lebong',
  'headers': {
  }
}
request(options, function (error, response) {
	if (error) throw new Error(error);
  var a =JSON.parse(response.body).data;
    var callback = () => api.sendMessage({
      attachment: fs.createReadStream(__dirname + "/src/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"));
    return request(encodeURI(`${a}`)).pipe(fs.createWriteStream(__dirname + '/src/1.png')).on('close', () => callback());
    console.log(rq)
  });
}
