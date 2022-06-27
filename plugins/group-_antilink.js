let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  if (user.isAdmin || user.isSuperAdmin) return m.reply ('Karena Kamu Adalah Admin Group Bot tidak akan Kick Kamu')
 m.reply(`「 ANTILINK DETECTOR 」\nLink Gorup Terdeteksi Maaf ${name} Kamu Telah Mengirim Link Group Kamu Akan Saya Kick :(`)
   this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

module.exports = handler


/*
let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` 「 ANTILINK 」 ${isAdmin ? "Admin mah bebas Dong goblok :'v" : `\n\nlink group terdeteksi dan ${global.namabot} bukan admin jadi tidak bisa ngekick!`}`)
    if (isBotAdmin) {
      m.reply(` 「 ANTILINK 」 \n\nLink Group Terdeteksi, bye Kamu Akan Di Entod!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
*/
