let handler = async (m, { conn, usedprefix:_p }) => {
  let preview = {}
  try {
   if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Florensius27/Loren-BOT')
  } catch (e) {
    try {
     if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
     } finally {
       let exp = global.DATABASE.data.users[m.sender].exp
       let name = conn.getName(m.sender)
       let d = new Date
       let locale ='id-Id'
       let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d/84600000) % 5]
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, {
         day: 'numeric',
         month: 'long'
         year: 'numeric'
        })
        let time = d.toLocaleTimeString(locale, {
          hour: 'numeric',
          minute: 'numeric'
          second: 'numeric'
        })

        let text = conn.menu ? conn.menu
          .replace(/%p/g, _p)
          .replace(/%exp/g, exp)
          .replace(/%name/g, name)
          .replace(/%weton/g, weton)
          .replace(/%week/g, weton)
          .replace(/%date/g, date)
          .replace(/%time/g, time)
*══❏☆[_Marxy • BOT_]☆❏══*

Hai *%name* 👋
Bot name : *Marxy BOT*
Created by : Florensius
Owner : Bernadetta = wa.me/6282294187818

*══❏☆[_Bot Commands_]☆❏══*

➤Prefix
    *[ $(_p) ]*

*[_Rules_]*

➤ *•Dilarang spam!!*
➤ *•Dilarang toxic!!*
➤ *•Dilarang telpon/VC!!*

*[_Main_]*

➤ !menu
➤ !help
➤ !commands

Bot Features 👇
‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎
*════❏ ☆[_Menu_]☆ ❏════*

╭──── *[_Sticker_]* 
│
├➤ *$(_p)sticker*
│ *Desc* : jadi stiker
├➤ Reply gambar ketik $(_p)sticker
│ *Desc* : jadi stiker
├➤ $(_p)toimg *[reply sticker]*
│ *Desc* : jadi gambar
╰──────────────────

╭───── *[_tools_]*
│
├➤ $(_p)logoavanger *text|text*
│ *Desc* : logo avanger
├➤ $(_p)glitchtext *[text]*
│ *Desc* : teks glitch
├➤ $(_p)readmore *text|text*
│ *Desc* : baca selengkapnya
├➤ $(_p)nulis *[text]*
│ *Desc* : menulis teks
├➤ $(_p)tulis *[text]*
│ *Desc* : menulis teks
╰──────────────────

╭───── *[_Search_]*
│
├➤ $(_p)google *[search]*
│ *Desc* : pencarian melalui google
├➤ $(_p)googlef *[search]*
│ *Desc* : Pencarian melalui google
├➤ $(_p)joox *[URL]*
│ *Desc* : lagu via joox
├➤ $(_p)lirik *[title]*
│ *Desc* : lirik lagu lengkap
├➤ $(_p)yta *[url]*
│ *Desc* : youtube pencarian
├➤ $(_p)play *[title]*
│ *Desc* : mainkan lagu
├➤ $(_p)apkmod *[nama aplikasi]*
│ *Desc* : link aplikasi mod
╰───────────────────

╭──── *[_Education_]* 
│
├➤ $(_p)math *[mode]*
│ *Desc* : tantangan matematika
├➤ $(_p)brainly *[query]*
│ *Desc* : jawaban via brainly
├➤ $(_p)kbbi *[kata kunci]*
│ *Desc* : arti kata kunci
├➤ $(_p)calculator *[angkanya]* [+×÷/*-]
│ *Desc* : kalkulator
╰───────────────────

╭──── *[_Other_]* 
│
├➤ $(_p)tutorial
│ *Desc* : tutorial bikin bot
├➤ $(_p)jadibot
│ *Desc* : jadi bot
├➤ $(_p)ping
│ *Desc* : kekuatan sinyal
├➤ $(_p)speed
│ *Desc* : kekuatan sinyal
╰─────────────

╭──── *[_No Category_]*
│
├➤ $(_p) <>
│ *Desc* : tidak termasuk category
╰──────────────────

*NB* : Apabila bot tidak merespon, silahkan send ulang..

⏳Time : open 24 jam
✨Day : Setiap Hari

╭──────────────────
│I Hope You Have A Good Day..!! ✨
│
╰━━> *꧁Marxy • BOT꧂* ━━
━⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱๑ ˌ⃟ˌ⃟ˌ⃟ˌ‍⚔ˌ⃟ˌ⃟ˌ⃟ˌ ๑⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱━
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\commands)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8026)
const readMore = more.repeat(4001)
