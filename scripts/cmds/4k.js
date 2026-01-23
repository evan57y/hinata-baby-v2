const axios = require("axios");

const mahmud = async () => {
  const base = await axios.get("https://raw.githubusercontent.com/mahmudx7/HINATA/main/baseApiUrl.json");
  return base.data.mahmud;
};

/**
* @author MahMUD
* @author: do not delete it
*/

module.exports = {
  config: {
    name: "4k",
    version: "1.7",
    author: "MahMUD",
    countDown: 10,
    role: 0,
    category: "image",
    description: "Enhance or restore image quality using 4k AI.",
    guide: {
      en: "{pn} [url] or reply with image"
    }
  },

  onStart: async function ({ message, event, args }) {
    
    const obfuscatedAuthor = String.fromCharCode(77, 97, 104, 77, 85, 68); 
    if (module.exports.config.author !== obfuscatedAuthor) {
      return api.sendMessage("You are not authorized to change the author name.", event.threadID, event.messageID);
    }
    const startTime = Date.now();
    let imgUrl;

    if (event.messageReply?.attachments?.[0]?.type === "photo") {
      imgUrl = event.messageReply.attachments[0].url;
    }

    else if (args[0]) {
      imgUrl = args.join(" ");
    }

    if (!imgUrl) {
      return message.reply("Baby, Please reply to an image or provide an image URL");
    }
  
    const waitMsg = await message.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝟒𝐤 𝐢𝐦𝐚𝐠𝐞...𝐰𝐚𝐢𝐭 𝐛𝐚𝐛𝐲 <😘");
    message.reaction("😘", event.messageID);

    try {
      
      const apiUrl = `${await mahmud()}/api/hd?imgUrl=${encodeURIComponent(imgUrl)}`;

      const res = await axios.get(apiUrl, { responseType: "stream" });
      if (waitMsg?.messageID) message.unsend(waitMsg.messageID);

      message.reaction("✅", event.messageID);

      const processTime = ((Date.now() - startTime) / 1000).toFixed(2);

      message.reply({
        body: `✅ | 𝐇𝐞𝐫𝐞'𝐬 𝐲𝐨𝐮𝐫 𝟒𝐤 𝐢𝐦𝐚𝐠𝐞 𝐛𝐚𝐛𝐲`,
        attachment: res.data
      });

    } catch (error) {
  
      if (waitMsg?.messageID) message.unsend(waitMsg.messageID);

      message.reaction("❎", event.messageID);
      message.reply(`🥹error baby, contact MahMUD.`);
    }
  }
};const axios = require("axios");

const mahmud = async () => {
    const base = await axios.get("https://raw.githubusercontent.com/mahmudx7/HINATA/main/baseApiUrl.json");
    return base.data.mahmud;
};

/**
 * @author MahMUD
 * @author: do not delete it
 */

module.exports = {
    config: {
        name: "play",
        version: "1.7",
        author: "MahMUD",
        countDown: 10,
        role: 0,
        category: "music",
        guide: {
            en: "{pn} [song name]"
        }
    },

    onStart: async function ({ api, event, args, message }) {
        const _0x4b = (function () {
            const _0xarr = [
                'YXV0aG9y', 
                'WW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBjaGFuZ2UgdGhlIGF1dGhvciBuYW1lLg==', 
                '4p6eIHwgUGxlYXNlIHByb3ZpZGUgYSBzb25nIG5hbWUuXG5cbkV4YW1wbGU6IHBsYXkgIG1vb2Q=', 
                'cmVwbHk=', 
                'c2VuZE1lc3NhZ2U=', 
                'L2FwaS9wbGF5P21haG11ZD0=', 
                '4pyFIHwgSGVyZSdzIHlvdXIgcmVxdWVzdGVkIHNvbmc6XG7inp4g', 
                '8J+luWVycm9yLCBDb250YWN0IE1haE1VRC4=' 
            ];
            return function (_0xi) {
                return Buffer.from(_0xarr[_0xi], 'base64').toString();
            };
        })();

        const _0xauth = String.fromCharCode(77, 97, 104, 77, 85, 68); 
        if (this.config.author !== _0xauth) {  
            return api[_0x4b(4)](_0x4b(1), event.threadID, event.messageID);  
        }  

        if (!args[0]) {  
            try { api.setMessageReaction("🥹", event.messageID, () => {}, true); } catch (e) {}
            return message[_0x4b(3)](_0x4b(2));  
        }  

        const query = encodeURIComponent(args.join(" "));  
        const apiUrl = `${await mahmud()}${_0x4b(5)}${query}`;  

        try {  
            api.setMessageReaction("🐤", event.messageID, () => {}, true);  

            const response = await axios({  
                method: "GET",  
                url: apiUrl,  
                responseType: "stream",
                headers: { [_0x4b(0)]: _0xauth }
            });  

            message[_0x4b(3)]({  
                body: _0x4b(6) + args.join(" "),  
                attachment: response.data  
            }, () => {  
                api.setMessageReaction("🪽", event.messageID, () => {}, true);  
            });  

        } catch (e) {  
            api.setMessageReaction("🥹", event.messageID, () => {}, true);
            message[_0x4b(3)](_0x4b(7));  
        }
    }
};
