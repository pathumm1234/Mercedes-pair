const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "DARK-SHADOW&" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*𝙳𝚘𝚗𝚝 𝚜𝚑𝚊𝚛𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚍𝚎 𝚠𝚒𝚝𝚑 𝚊𝚗𝚢𝚘𝚗𝚎!! 𝚄𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚍𝚎 𝚝𝚘 𝚌𝚛𝚎𝚊𝚝𝚎 Mercedes  𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛 𝚋𝚘𝚝.*\n\n ◦ *Github:* https://github.com/betingrich/Maserati`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "Mercedes",
thumbnailUrl: "https://telegra.ph/file/88c7e505240398b93e0fe.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*𝙳𝚘𝚗𝚝 𝚜𝚑𝚊𝚛𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚍𝚎 𝚠𝚒𝚝𝚑 𝚊𝚗𝚢𝚘𝚗𝚎!! 𝚄𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚍𝚎 𝚝𝚘 𝚌𝚛𝚎𝚊𝚝𝚎 Mercedes 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛 𝚋𝚘𝚝.*\n\n ◦ *Github:* https://github.com/betingrich/Maserati`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "Mercedes",
thumbnailUrl: "https://telegra.ph/file/88c7e505240398b93e0fe.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;

const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id')
const id = makeid()
const fs = require('fs')
const pino = require('pino')
const { default: makeWASocket, Browsers, delay, useMultiFileAuthState, BufferJSON, fetchLatestBaileysVersion, PHONENUMBER_MCC, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys")
const Pino = require("pino")
const NodeCache = require("node-cache")
const chalk = require("chalk")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")


let phoneNumber = "94711262551"

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))


  async function qr() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState('./session/'+id)
    const msgRetryCounterCache = new NodeCache()
    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
      browser: Browsers.windows('safari'), // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })


   if (pairingCode && !sock.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example :+")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +94711262551 : `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +94711262551")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number \nFor example: +94711262551 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await sock.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }
//------------------------------------------------------
    sock.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection == "open") {
      await delay(1000 * 10);
      const output = await pastebin.createPasteFromFile(__dirname+`/session/${id}/creds.json`, "pastebin-js test", null, 1, "N")
      const ethix = await sock.sendMessage(sock.user.id, {
        text: `DARK-SHADOW&` + output.split('/')[3]
      })
      sock.groupAcceptInvite("CPUDKTYNb6Y9zENvySnBZC");
      await sock.sendMessage(sock.user.id, { text: `> ⚠️ DO NOT SHARE THIS SESSION-ID WITH ANYBODY ❌` }, { quoted: ethix });
      await delay(1000 * 2);
      process.exit(0);
    }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            qr()
        }
    })
    sock.ev.on('creds.update', saveCreds)
    sock.ev.on("messages.upsert",  () => { })
}
qr()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})


