const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh Trai",
  commandCategory: "Hình Ảnh",
  usages: "hentaiz",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = ["http://gn5.ectrix.xyz:2392/boy",];
   var callback = () => api.sendMessage({body:`Ảnh Trai\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
   };