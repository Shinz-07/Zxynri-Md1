let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*Masih ada absen di chat ini!*_\n\n*${usedPrefix}cekabsen* - Untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus absen`
    }
    conn.absen[id] = [
        conn.sendBut(m.chat, `━━━━ 「 *Absen Dimulai* 」━━━━\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`, wm, 'Absen', '.absen', m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
