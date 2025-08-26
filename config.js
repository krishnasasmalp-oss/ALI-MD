
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VzY6jRhB+l77a2gEMGCyNlAYD/jfYxmM7ygFDg7H5G7rBxitLc14pb5DLKisl2iSKlCiKIvkV9p7JLU/gV4iwZ3ZH2mQzkcKh1N00Vd9XVV/xEkSxj1EXFaDxEiSpn1sElUtSJAg0gJS5LkpBFTgWsUADCN31APXmsB0V270j9es9eyUI40hnxLowRsnNjiSFYASDULkGhypIsmXg259waBewYrWu1IlgNg3hFm0hFXZX9WI7XKTtIDVH+g0c+nt5ODavwaH0aPmpH3lKskIhSq2giwrd8tPnwWcVhXOkmrNGjIAWVICDXjZB7rAvtvw0Kirzpm3y07APmWfCb8aGOMnytbdNhB69Q8w430v7yXyj02gGScx2OBtW2Jaxhhf42Pci5LQdFBGfFM/Ou99uX0mGchOE3THH5xpemx2t6w5sus9h269hvCFWR1M2G/t5wCmnNrzNmfrgdmnTpOdWikoeXHnFrOg4tdvAX05FtNvarrbFT4Hr6WOvbP5L3rU2xGx/LRvNirPyWTMJbzqh1K7vm/aGsSfCnAxgqM1Tv0Y9D/7WGN3G8VboKSvD2hMDSrDJR6N9NNOtKc9txXW+6nUDeWsqH+BbJEs/hbIY0IOuNuFvVt2alu7wYK5oSegVaKJXVnWusqEQbLnqTN0psidNuCY3tXsjcRpQkjHXZ7dwq7Tk+m6Dh/1+qvQLLlkPJeP6zGiDirYDGvShClLk+ZikFvHjqDxjaKYKLCcfIztF5JxesBzpo42+U83FRqFnhb2otdXdbmFHreEgQThfRt3QUCbEGcJrUAVJGtsIY+S0fEzitOgjjC0PYdD4/FypknSKwpigju+ABhBpgeEojq0LDPUZfrFdWQRbSfIiQgRUgZvGYR+BBkkzVAXnDySG4ZpUTWFrlEoLPEPzvMjLKqsyMitLMl1SDC9BJ36IMLHCBDToOsczFC9Q1KH6/+CQRaoGYU1mRVYSKJpRuCZFUTxHQ5kRaan+aRw0e/iiCiK0I5c+LrNfo6vA9VNMzChLgthyHpv88aVl23EWkXER2XK5QCloPDlGhPiRh0tmWWSl9srPkVzyAA3XCjB6X3CUIueRy8MQk2On7MPOfDHm2dEClNhLRx/lplHjP05PZJW3wen45nR8fTr+dDp+dzp+eTr+fDr+eDr+cjr+cDr+djq+/v2b+1d/vL2/e/f9/d393bs3pf3z16/Om2/P9uuzfXt/d/8KVEFwDi8wvMCIvEgJAkOzJYDy/PCeeInTQcTyA1zWpe32ktiTlO6YEGxqGlQ8KHsQfEjUowAvDa6u82U9cDfzqOJvu5nRppNYFU3DYonohWpm36wNHlHmFLLXf+MENEBrYG68uYn2C1rTdLxSEL/fzdqUJ1Fy86bfIsOFyvNLLhu1mrHtM2bksbrfFLe3La4Iw0JXMzyiTNzcL4LBJp/MVJOG8LqM5qDct9HTYKhXTOp7YWnX9pTcdTlRy91p315ti3ZW6PsRx6vSsjtf1PVm3mPg0tjdmop5tdx5nWy17owmNTokHWK3COzmLsZdOx9J8DIazqMpePgl+A+i9c9b10fnCftQ6n9tiQvwsnOpQ/WJj4eZ/Q9zTxrN60yFm3Fa5yrGcrqRB5YluVNFy3ruvLNaRmpMDSOiqsYQHEoJJYFF3DgNQQPgcGmBKkjjrNRBO3LjT0SSIdWG3oV2YGECP2jrY7nWefFyS0/jpGXhVemAdTuDUicFTJIxscijUgEsH3nNgMNf4Fwo89QIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by DERK-SOUMYA
      ", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "918250547820", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Ｄａｒｋ－𓆩♔𓆪𝘴 𝘰 𝘶 𝘮 𝘺 𝘢𓆩♔𓆪ايڪـͬــͤــᷜــͨــͣــͪـي", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "warn", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "null", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
