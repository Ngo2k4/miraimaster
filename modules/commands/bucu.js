const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bucu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Bú Cu Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bucu",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://scontent.xx.fbcdn.net/v/t1.15752-9/91690867_314927766149698_3067149936937140224_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=lWujtvRfOgsAX-RMndo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=6982c8f86676f04b8063f03589ddfc88&oe=60D9B050",
             ];
   var callback = () => api.sendMessage({body:`Bú Cu Đã Không Cưng 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/bucu.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bucu.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bucu.jpg")).on("close",() => callback());
   };