let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/133d80c6c852427d7a7ff.png', m, { packname, author })
}

handler.customPrefix = /^(nani|AkuwibuElit|SyIniWibuElite|tes|tess|test|wibu)$/i
handler.command = new RegExp

module.exports = handler
