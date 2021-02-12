const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@Loren_27/baileys')

let handler  = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya bro!', m)
  let q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    m.reply('*[Wait]* _Sedang memproses...⏳ silahkan tunggu ±1 min!_')
    conn.sendFile(m.chat, link, ('*_Processing Success.. #Marxy_BOT_*')
    if (!sticker) throw sticker
    let bufs = []
    let im = spawn('convert', ['webp:-', 'jpeg:-'])
    im.on('error',e =>  conn.reply(m.chat, util.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
      conn.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, {
        quoted: m
      })
    })
  }
}
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
