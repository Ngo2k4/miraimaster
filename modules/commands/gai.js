const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh Gái",
  commandCategory: "Hình Ảnh",
  usages: "hentaiz",
  cooldowns: 5,
  dependencies: ["request","fs","axios"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = ["https://i.imgur.com/qHUzzbe.jpg",
"https://i.imgur.com/0c63N0e.jpg",
"https://i.imgur.com/FLRuY1b.jpg",
"https://i.imgur.com/lFTrbpC.jpg",
"https://i.imgur.com/KfCtUTa.jpg",
"https://i.imgur.com/1XSBOCy.jpg",
"https://i.imgur.com/3zmQ3q6.jpg",
"https://i.imgur.com/angZDU2.jpg",
"https://i.imgur.com/IeGsSEe.jpg",
"https://i.imgur.com/UsuQOPk.jpg",
"https://i.imgur.com/XdiicpF.jpg",
"https://i.imgur.com/g3bhPMs.jpg",
"https://i.imgur.com/nzJJWMQ.jpg",
"https://i.imgur.com/FQoM6TP.jpg",
"https://i.imgur.com/CNvO6ry.jpg",
"https://i.imgur.com/sPaB1Y8.jpg",
"https://i.imgur.com/ycgGpMP.jpg",
"https://i.imgur.com/TGvG74m.jpg",
"https://i.imgur.com/V4N2FM0.jpg",
"https://i.imgur.com/wnAc7tl.jpg",
"https://i.imgur.com/PCk1gTy.jpg",
"https://i.imgur.com/knDDafZ.jpg",
"https://i.imgur.com/BpuE1Zx.jpg",
"https://i.imgur.com/RDEdFat.jpg",
"https://i.imgur.com/bHReaTU.jpg",
"https://i.imgur.com/rf9Da4Z.jpg",
"https://i.imgur.com/oA4ahpe.jpg",
"https://i.imgur.com/dsUDE1V.jpg",
"https://i.imgur.com/c7No9jA.jpg",
"https://i.imgur.com/0tz4sUz.jpg",
"https://i.imgur.com/gBJkXR9.jpg",
"https://i.imgur.com/xUhif4j.jpg",
"https://i.imgur.com/27qcG1p.jpg",
"https://i.imgur.com/OVpEa09.jpg",
"https://i.imgur.com/9Zl6UlL.jpg",
"https://i.imgur.com/5gszcJT.jpg",
"https://i.imgur.com/6SoSlW1.jpg",
"https://i.imgur.com/M7ocnYo.jpg",
"https://i.imgur.com/YQOxhEM.jpg",
"https://i.imgur.com/bLr1dyv.jpg",
"https://i.imgur.com/IRg5BeI.jpg",
"https://i.imgur.com/YYdvPG0.jpg",
"https://i.imgur.com/NjWb8PC.jpg",
"https://i.imgur.com/bAE4gDj.jpg",
"https://i.imgur.com/Do43yPz.jpg",
"https://i.imgur.com/wLPz7l9.jpg",
"https://i.imgur.com/wlnFWBs.jpg",
"https://i.imgur.com/ruot0W8.jpg",
"https://i.imgur.com/IGAEnbF.jpg",
"https://i.imgur.com/IgQlIVZ.jpg",
"https://i.imgur.com/imFYxUN.jpg",
"https://i.imgur.com/YjWjScy.jpg",
"https://i.imgur.com/wkvsxX8.jpg",
"https://i.imgur.com/fAgzvtm.jpg",
"https://i.imgur.com/bb08lNN.jpg",
"https://i.imgur.com/ZkC7T4h.jpg",
"https://i.imgur.com/KkHYmqU.jpg",
"https://i.imgur.com/saiRane.jpg",
"https://i.imgur.com/e9j7Nwl.jpg",
"https://i.imgur.com/JnePLtM.jpg",
"https://i.imgur.com/CdVbW76.jpg",
"https://i.imgur.com/AuxDQO8.jpg",
"https://i.imgur.com/fll1z8m.jpg",
"https://i.imgur.com/ugpvS1j.jpg",
"https://i.imgur.com/16WuigG.jpg",
"https://i.imgur.com/sNwXKpf.jpg",
"https://i.imgur.com/wUjjui9.jpg",
"https://i.imgur.com/TCPa1Yx.jpg",
"https://i.imgur.com/uvHqxdW.jpg",
"https://i.imgur.com/42Jyc4E.jpg",
"https://i.imgur.com/dLDtx9F.jpg",
"https://i.imgur.com/5jmm8FG.jpg",
"https://i.imgur.com/iI2HXtq.jpg",
"https://i.imgur.com/k05RTCQ.jpg",
"https://i.imgur.com/hXbtLe2.jpg",
"https://i.imgur.com/wxKXoAD.jpg",
"https://i.imgur.com/oE4ZIiF.jpg",
"https://i.imgur.com/uHlKafJ.jpg",
"https://i.imgur.com/PbjpNHO.jpg",
"https://i.imgur.com/oiTN8Bz.jpg",
"https://i.imgur.com/oMvPOBO.jpg",
"https://i.imgur.com/JpA0UOl.jpg",
"https://i.imgur.com/qpPfMGd.jpg",
"https://i.imgur.com/c3gX7o9.jpg",
"https://i.imgur.com/tKgPZdl.jpg",
"https://i.imgur.com/i5ER3qx.jpg",
"https://i.imgur.com/ycjrsvJ.jpg",
"https://i.imgur.com/MBOLrmt.jpg",
"https://i.imgur.com/gGvrasw.jpg",
"https://i.imgur.com/DNA0pRt.jpg",
"https://i.imgur.com/NCBcsrg.jpg",
"https://i.imgur.com/kVcb6pX.jpg",
"https://i.imgur.com/QrrUm7r.jpg",
"https://i.imgur.com/uNI3mwh.jpg",
"https://i.imgur.com/mISdKwQ.jpg",
"https://i.imgur.com/NN8Epny.jpg",
"https://i.imgur.com/Mb1K338.jpg",
"https://i.imgur.com/cs78YhF.jpg",
"https://i.imgur.com/41TY5Ij.jpg",
"https://i.imgur.com/S6PbyCi.jpg",
"https://i.imgur.com/gBaktdE.jpg",
"https://i.imgur.com/2KzffJk.jpg",
"https://i.imgur.com/CggS2dI.jpg",
"https://i.imgur.com/kdjG7IP.jpg",
"https://i.imgur.com/Wq6DkhO.jpg",
"https://i.imgur.com/twh4dSC.jpg",
"https://i.imgur.com/uhE1NsU.jpg",
"https://i.imgur.com/3eTFJoS.jpg",
"https://i.imgur.com/VK7IEWY.jpg",
"https://i.imgur.com/9l7X613.jpg",
"https://i.imgur.com/yrnZG4C.jpg",
"https://i.imgur.com/TJbu5SZ.jpg",
"https://i.imgur.com/vNAigre.jpg",
"https://i.imgur.com/ClbbYoE.jpg",
"https://i.imgur.com/Y97saRc.jpg",
"https://i.imgur.com/SaKsDSy.jpg",
"https://i.imgur.com/eDMo7Qo.jpg",
"https://i.imgur.com/5WUT8Yu.jpg",
"https://i.imgur.com/BQsYy8B.jpg",
"https://i.imgur.com/JnePLtM.jpg",
"https://i.imgur.com/CdVbW76.jpg",
"https://i.imgur.com/AuxDQO8.jpg",
"https://i.imgur.com/fll1z8m.jpg",
"https://i.imgur.com/16WuigG.jpg",
"https://i.imgur.com/sNwXKpf.jpg",
"https://i.imgur.com/wUjjui9.jpg",
"https://i.imgur.com/TCPa1Yx.jpg",
"https://i.imgur.com/uvHqxdW.jpg",
"https://i.imgur.com/42Jyc4E.jpg",
"https://i.imgur.com/dLDtx9F.jpg",
"https://i.imgur.com/5jmm8FG.jpg",
"https://i.imgur.com/iI2HXtq.jpg",
"https://i.imgur.com/k05RTCQ.jpg",
"https://i.imgur.com/hXbtLe2.jpg",
"https://i.imgur.com/wxKXoAD.jpg",
"https://i.imgur.com/oE4ZIiF.jpg",
"https://i.imgur.com/uHlKafJ.jpg",
"https://i.imgur.com/PbjpNHO.jpg",
"https://i.imgur.com/oiTN8Bz.jpg",
"https://i.imgur.com/oMvPOBO.jpg",
"https://i.imgur.com/JpA0UOl.jpg",
"https://i.imgur.com/qpPfMGd.jpg",
"https://i.imgur.com/c3gX7o9.jpg",
"https://i.imgur.com/tKgPZdl.jpg",
"https://i.imgur.com/i5ER3qx.jpg",
"https://i.imgur.com/ycjrsvJ.jpg",
"https://i.imgur.com/MBOLrmt.jpg",
"https://i.imgur.com/gGvrasw.jpg",
"https://i.imgur.com/DNA0pRt.jpg",
"https://i.imgur.com/NCBcsrg.jpg",
"https://i.imgur.com/kVcb6pX.jpg",
"https://i.imgur.com/QrrUm7r.jpg",
"https://i.imgur.com/uNI3mwh.jpg",
"https://i.imgur.com/mISdKwQ.jpg",
"https://i.imgur.com/NN8Epny.jpg",
"https://i.imgur.com/Mb1K338.jpg",
"https://i.imgur.com/cs78YhF.jpg",
"https://i.imgur.com/41TY5Ij.jpg",
"https://i.imgur.com/S6PbyCi.jpg",
"https://i.imgur.com/gBaktdE.jpg",
"https://i.imgur.com/2KzffJk.jpg",
"https://i.imgur.com/CggS2dI.jpg",
"https://i.imgur.com/Wq6DkhO.jpg",
"https://i.imgur.com/ll2NZRy.jpg",
"https://i.imgur.com/KpPk9HN.jpg",
"https://i.imgur.com/lrMmzeQ.jpg",
"https://i.imgur.com/PLt2Lmh.jpg",
"https://i.imgur.com/6zhbGky.jpg",
"https://i.imgur.com/R139wvV.jpg",
"https://i.imgur.com/gKtuia0.jpg",
"https://i.imgur.com/tPdn7Nc.jpg",
"https://i.imgur.com/d4tltHo.jpg",
"https://i.imgur.com/JvnfZuJ.jpg",
"https://i.imgur.com/0WqS7Rv.jpg",
"https://i.imgur.com/G7XFUJX.jpg",
"https://i.imgur.com/e5YhENH.jpg",
"https://i.imgur.com/mMtwdNv.jpg",
"https://i.imgur.com/W4VILTN.jpg",
"https://i.imgur.com/roGfsfa.jpg",
"https://i.imgur.com/NwUXpG1.jpg",
"https://i.imgur.com/nQhoYPH.jpg",
"https://i.imgur.com/3y8tWkK.jpg",
"https://i.imgur.com/wGD5X6Z.jpg",
"https://i.imgur.com/nNhMhOU.jpg",
"https://i.imgur.com/ppsra3i.jpg",
"https://i.imgur.com/gPrPjHG.jpg",
"https://i.imgur.com/OKNeISG.jpg",
"https://i.imgur.com/GGEVzVW.jpg",
"https://i.imgur.com/bOJK7KP.jpg",
"https://i.imgur.com/hI05CbI.jpg",
"https://i.imgur.com/U7tDer0.jpg",
"https://i.imgur.com/LcMmqgU.jpg",
"https://i.imgur.com/JzWInih.jpg",
"https://i.imgur.com/WFBHdts.jpg",
"https://i.imgur.com/dDABWPr.jpg",
"https://i.imgur.com/5GsEOEU.jpg",
"https://i.imgur.com/irrhPBO.jpg",
"https://i.imgur.com/e1HCcnj.jpg",
"https://i.imgur.com/ITdUCQQ.jpg",
"https://i.imgur.com/HyyBVNp.jpg",
"https://i.imgur.com/Q4Ph8Xw.jpg",
"https://i.imgur.com/T1S0u3T.jpg",
"https://i.imgur.com/rs9xk5l.jpg",
"https://i.imgur.com/VwDq7wn.jpg",
"https://i.imgur.com/xFfDLhX.jpg",
"https://i.imgur.com/LANhLf9.jpg",
"https://i.imgur.com/5mcfFDS.jpg",
"https://i.imgur.com/iBrlWsj.jpg",
"https://i.imgur.com/K2X9B4k.jpg",
"https://i.imgur.com/oa8l5E1.jpg",
"https://i.imgur.com/GN0e5e6.jpg",
"https://i.imgur.com/DjWIvge.jpg",
"https://i.imgur.com/v3Lc9qK.jpg",
"https://i.imgur.com/CMisdKd.jpg",
"https://i.imgur.com/vzaLYFD.jpg",
"https://i.imgur.com/NCsqrgB.jpg",
"https://i.imgur.com/8klzyUS.jpg",
"https://i.imgur.com/pvau3BC.jpg",
"https://i.imgur.com/49r4lyf.jpg",
"https://i.imgur.com/ll2NZRy.jpg",
"https://i.imgur.com/KpPk9HN.jpg",
"https://i.imgur.com/lrMmzeQ.jpg",
"https://imgur.com/VcRw35A.jpg",
"https://imgur.com/1HJwUEX.jpg",
"https://imgur.com/JHxV805.jpg",
"https://imgur.com/1Eh6xvn.jpg",
"https://imgur.com/REvdXC2.jpg",
"https://imgur.com/fZxiOgL.jpg",
"https://imgur.com/Xs9RF2D.jpg",
"https://imgur.com/5iSM4HC.jpg",
"https://imgur.com/xOeoT3t.jpg",
"https://imgur.com/qD3yqwW.jpg",
"https://imgur.com/iHJOeVZ.jpg",
"https://imgur.com/sPIEqdx.jpg",
"https://imgur.com/xLxcKMf.jpg",
"https://imgur.com/8QyRkyf.jpg",
"https://imgur.com/nI7NHyF.jpg",];
   var callback = () => api.sendMessage({body:`DATA\nPhotos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
   };